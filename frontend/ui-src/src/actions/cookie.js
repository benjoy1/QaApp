import C from '../constants';

export const readCookie = ( name ) => {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
    return parts.pop().split(";").shift();
}


export const writeCookie =( val ) =>
    document.cookie = val


export const addCookie = ( name ) => {
    
    const cookie = readCookie(name);

    if (cookie && cookie.length > 2) {
        return {
            type: C.ADD_COOKIE,
            payload: cookie
        }
    } else {
        return {
            type: C.ADD_ERROR,
            payload: "could not read JSESSION ID from cookie"
        }
    }
}


export const removeCookie = () => {
    return {
        type: C.REMOVE_COOKIE
    }
}

//this has not been tested