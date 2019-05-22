import React from 'react';
import axios from 'axios';
import { removeCode } from './actions/code';
import { removeToken } from './actions/token';

const qs = require('querystring');

export class Logout extends React.Component {
  
  componentDidMount() {
    if (sessionStorage.token) {
      const tokenURL = process.env.GW_TOKEN_REVOKE_ENDPOINT;
      let token = store.getState().token;

      if (!token) {
        const tokenStr = sessionStorage.getItem('token');
        token = JSON.parse(tokenStr);
      }

      const data = {
        grant_type: process.env.GW_GRANT_TYPE_CLIENT_CRED,
        client_id: process.env.GW_CLIENT_ID,
        scope: process.env.GW_SCOPE_INTERNAL,
        token: token.access_token,
        token_type_hint: process.env.GW_TOKEN_TYPE_HINT
      };

      axios({
        method: 'POST',
        url: tokenURL,
        data: qs.stringify(data),
        config: {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'cache-control': 'no-cache'
          }
        }
      }).then(response => {
        store.dispatch(removeCode());
        store.dispatch(removeToken());
        sessionStorage.clear();
        this.props.history.push('/');
      });
    }
  }

  render() {
    return <div style={{ minHeight: '42vh' }} />;
  }
}

export default Logout;
