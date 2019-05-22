import appReducer from './reducers/index.js';
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import initialState from './initialState.json'

const consoleMessages = store => next => action => {

    let result;

    console.groupCollapsed (` ACTION => ${action.type} `)
    //THESE CONSOLE.LOGS WILL NOT PRINT IN NON DEVELOPMENT ENVIRONMENT
    console.log (`
        INITIAL STORE VALUES
        =============================
        cookie: ${ store.getState().cookie }
        cart: ${ store.getState().cart }
        error: ${ store.getState().error }
        profile: ${ JSON.stringify(store.getState().profile) }
        vehicleList: ${ store.getState().vehicleList.length }
        preferredVehicle: ${ store.getState().preferredVehicle }
        vehicleSortOrder: ${ store.getState().vehicleSortOrder }
        shop: ${ store.getState().shop }
        azStore: ${ JSON.stringify(store.getState().azStore) }
        code: ${store.getState().code}
        token: ${JSON.stringify(store.getState().token)}
        
    `)

    result = next(action);

    console.log(`
        CURRENT STORE VALUES
        =============================
        cookie: ${ store.getState().cookie }
        cart: ${ store.getState().cart }
        error: ${ store.getState().error }
        profile: ${ JSON.stringify(store.getState().profile) }
        vehicleList: ${ store.getState().vehicleList.length }
        preferredVehicle: ${ store.getState().preferredVehicle }
        vehicleSortOrder: ${ store.getState().vehicleSortOrder }
        shop: ${ store.getState().shop }
        azStore: ${ JSON.stringify(store.getState().azStore) }
        code: ${store.getState().code}
        token: ${JSON.stringify(store.getState().token)}
    `)
    console.groupEnd()
    return result;
}


/*
**ONLY DISPLAY CONSOLE MESSAGES WHEN NODE_ENV = 'development'
**TO DO, ADD STORE DATA IN LOCAL STORAGE WHEN NODE_ENV IS = 'development'

export const factory = () => {
    return process.env.NODE_ENV === 'development' ?
            applyMiddleware (thunk, consoleMessages)(createStore)(appReducer):
            applyMiddleware (thunk)(createStore)(appReducer)
}


** OPTIONALLY, initial state can be integrated in INDEX.JS in lieu of HERE **
*/

const store =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
    : applyMiddleware(thunk)(createStore)(appReducer, initialState);

export default store;



