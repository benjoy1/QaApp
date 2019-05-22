import axios from 'axios';
import { addToken } from './actions/token';
import store from './factory';

const qs = require('querystring');

const tokenURL = process.env.GW_TOKEN_ENDPOINT;

const axiosWrapper = axios.create({
  headers: {
    Authorization: '',
  },
});

// Setting token for all service calls which pass through axios wrapper
axiosWrapper.interceptors.request.use(
  config => {
    let token = store.getState().token;

    if (!token) {
      const tokenStr = sessionStorage.getItem('token');
      token = JSON.parse(tokenStr);
    }

    if (token) {
      let accToken = token.access_token;
      config.headers.Authorization = `Bearer ${accToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Error handling for 401 - Unauthorization
axiosWrapper.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      originalRequest._retry = true;
      const refreshToken = JSON.parse(sessionStorage.getItem('token')).refresh_token;
      const reqData = {
        grant_type: process.env.GW_GRANT_TYPE_REFRESH,
        client_id: process.env.GW_CLIENT_ID,
        redirect_uri: process.env.REACT_REDIRECT_URI,
        refresh_token: refreshToken
      };

      return await axios({
        method: 'POST',
        url: tokenURL,
        data: qs.stringify(reqData),
        config: {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      }).then(
        ({ data }) => {
          sessionStorage.setItem('token', JSON.stringify(data));
          originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
          store.dispatch(addToken(data));
          return axiosWrapper(originalRequest);
        },
        refError => {
          if (refError.response.status === 401) {
            const GW_CODE_ENDPOINT = process.env.GW_CODE_ENDPOINT;
            const GW_SCOPE = process.env.GW_SCOPE;
            const GW_CLIENT_ID = process.env.GW_CLIENT_ID;
            const GW_RESPONSE_TYPE = process.env.GW_RESPONSE_TYPE;
            const REACT_REDIRECT_URI = process.env.REACT_REDIRECT_URI;

            const GW_REDIRECT_PAYLOAD = `${GW_CODE_ENDPOINT}?scope=${GW_SCOPE}&response_type=${GW_RESPONSE_TYPE}&client_id=${GW_CLIENT_ID}&redirect_uri=${REACT_REDIRECT_URI}`;

            sessionStorage.setItem('pageRequested', window.location.pathname);
            window.location.replace(GW_REDIRECT_PAYLOAD);
          }
          return refError;
        }
      );
    }
    return Promise.reject(error);
  }
);

export default axiosWrapper;
