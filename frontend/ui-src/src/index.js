import React from 'react';
import { render } from 'react-dom';

//REDUX
import store from './factory';
import {Provider} from 'react-redux';


//ACTIONS
import {readCookie} from './actions/cookie';

//ROUTER CONFIG
import RouteConfig from './routeConfig';

//GLOBAL STYLING OVERRIDE
import './theme/global.scss';



if (process.env.NODE_ENV ==='development') {
  window.store = store;
}


let JSESSIONID = readCookie("TEMPJESESSIONID");
JSESSIONID ?  console.log ( "JSESSIONID:: ", JSESSIONID ): console.log("Could not read JSEESIONID");

if ( JSESSIONID) {
  document.cookie = "_JSESSIONID="+JSESSIONID+"; domain=.autozone.com; path=/";
}


render( 
  <Provider store={store}>
    <RouteConfig history={history}/>
  </Provider>
  ,document.getElementById('root'));



// REDUX CONFIGURATION WITH LOCAL STORAGE
// KEEP THE BELOW CODE AS AN OPTIONAL ITEM
/*
var store;
if (process.env.NODE_ENV === 'development') {

  const initialState = localStorage['redux-store'] ?
      JSON.parse(localStorage['redux-store']) :
      sampleData

  const saveState = ()=> 
      localStorage['redux-store'] = JSON.stringify( store.getState() )

  store = factory( initialState);  
  store.subscribe(saveState);
  
  window.React = React;
  window.store = store;

} else {
  store = factory ( sampleData);
}
*/



























