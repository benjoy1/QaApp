import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, About, Landing, Contact, Demo, SideNav, Private } from './components/tempPages';
import { NavPrivate, NavPublic} from './components/Nav';

import PageNotFound from './components/PageNotFound';
import ChemicalsAndFluids from './components/Catalog/Accessories/Category/ChemicalsAndFluids';
import Parts from './components/Catalog/Parts';
import ShopSupplies from './components/Catalog/Accessories/ShopSupplies';
import ToolsAndEquipment from './components/Catalog/Accessories/Category/ToolsAndEquipment';
import Performance from './components/Catalog/Accessories/Category/Performance';
import ChooseJob from './components/Jobs/ChooseJob';
import OrderHistory from './components/Order/History';
import Success from './Success';
import Logout from './Logout';

import Footer from './components/Nav/Footer';
import './styles.scss';

import {addShop} from './actions/shop';
import { list } from 'postcss';

let GW_CODE_ENDPOINT = process.env.GW_CODE_ENDPOINT;
let GW_SCOPE = process.env.GW_SCOPE;
let GW_CLIENT_ID = process.env.GW_CLIENT_ID;
let GW_RESPONSE_TYPE = process.env.GW_RESPONSE_TYPE;
let REACT_REDIRECT_URI = process.env.REACT_REDIRECT_URI;

let GW_REDIRECT_PAYLOAD = GW_CODE_ENDPOINT+'?scope='+GW_SCOPE+'&response_type='+GW_RESPONSE_TYPE+'&client_id='+GW_CLIENT_ID+'&redirect_uri='+REACT_REDIRECT_URI;

export const PrivateRoute = ({ component: Component, ...rest })=> {

  
  return (
    <Route
      {...rest}
      render={ props =>
        store.getState().code || sessionStorage.code ? (
          <div className="root-container-private">
            <NavPrivate/>
            <Component {...props} />
            <div className="root-footer">{<Footer/>}</div>
          </div>
        ) : (
          <Route render={()=> {  
              sessionStorage.setItem("pageRequested", window.location.pathname );   // page being requested > session Storage
              window.location.replace( GW_REDIRECT_PAYLOAD );   // gw page
              //https://dv-api.autozone.com:8443/auth/oauth/v2/authorize?scope=b2bcustomers-spa&response_type=code&client_id=l7xxb3feb6c0b2f84bc2b596c60c35f5fd3c&redirect_uri=http://ca-dev.autozone.com:4000/success
              return null 
            } 
          }  /> 
          )
      }
    />
  );
}

export const PublicRoute = ({ component: Component, ...rest })=> {
  return (
    <Route
      {...rest}
      render={ props =>
        <div className="root-container-public">
          <NavPublic/>
          <Component {...props} />
          <div className="root-footer">{<Footer/>}</div>
          </div>
        }
    />
  );
}




const RouteConfig = ()=> 
(
<Router>
    <> 
      <SideNav display={true}/>
        <Switch>
          <PublicRoute exact path="/" component={Landing} />
          
          <Route path='/success' component={Success}/>
          <Route path='/logout' component={Logout}/>
          
          <PrivateRoute path="/private" component={Private} />
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/contact" component={Contact} />
          
          <Route path="/demo/" component={Demo} />
          
          <PrivateRoute path="/catalog/accessories/parts" component={Parts}/>
          <PrivateRoute path="/catalog/accessories/category/chemicalsandfluids" component={ChemicalsAndFluids}/>
          <PrivateRoute path="/catalog/accessories/shopsupplies" component={ShopSupplies}/>
          <PrivateRoute path="/catalog/accessories/category/toolsandequipment" component={ToolsAndEquipment}/>
          <PrivateRoute path="/catalog/accessories/category/performance" component={Performance}/>
          <PrivateRoute path="/jobs/choosejob" component={ChooseJob}/>
          <PrivateRoute path="/order/history" component={OrderHistory}/>
          
          <PublicRoute component = {PageNotFound}/>
          
        </Switch>
      </>
</Router>
)

export default RouteConfig;




//window.location.replace( '/login' ); //this requires a seperate login component which essntially redirect to API GW
//window.location.replace("https://dv-api.autozone.com:8443/auth/oauth/v2/authorize?scope=b2bcustomers-spa&response_type=code&client_id=l7xxb3feb6c0b2f84bc2b596c60c35f5fd3c&redirect_uri=http://ca-dev.autozone.com:4000/success");


/* 
//to get user info
curl --cookie "JSESSIONID=E1E0D723B4DBFC7CBD04DF3DC469101E.azprodev2-b2b1" -X POST "http://azprodev2.autozone.com:8280/rest/bean/atg/userprofiling/ProfileServices/validateSession" -v

//to get vehicles list
curl --cookie "JSESSIONID=E1E0D723B4DBFC7CBD04DF3DC469101E.azprodev2-b2b1" -X POST "http://azprodev2.autozone.com:8280/rest/bean/autozone/pro/service/rest/AZManageVehicleService/getVehicles" -v   -d 'pin=101655&azProfileId=132940112&atg-rest-depth=1'

//to cart info
curl --cookie "JSESSIONID=E1E0D723B4DBFC7CBD04DF3DC469101E.azprodev2-b2b1" -X POST "http://azprodev2.autozone.com:8280/rest/bean/autozone/pro/service/rest/FloatingCartService/getCart" -v

//to logout user
curl --cookie "JSESSIONID=E1E0D723B4DBFC7CBD04DF3DC469101E.azprodev2-b2b1" -X POST "http://azprodev2.autozone.com:8280/rest/bean/atg/userprofiling/ProfileServices/logoutUser" -v
*/


