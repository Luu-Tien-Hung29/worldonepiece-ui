import {
    TAB_LOGIN,
    TOTAL_ITEM_CART,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    ONCHANGE_SNACKBAR,
    CLOSE_SNACKBAR,
    REFRESH_TOKEN,
    REFRESH_TOKEN_SUCCESS,
} from './contant';

export const totalItemCart = (payload) => {
    return {
        type: TOTAL_ITEM_CART,
        payload,
    };
};
export const changeTabLogin = (payload) => {
    return {
        type: TAB_LOGIN,
        payload,
    };
};
// login and register
export const userLogin = (payload) => {
    return {
        type: LOGIN_USER,
        payload,
    };
};
export const userLoginSuccess = (payload) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload,
    };
};
export const userRegister = (payload) => {
    return {
        type: REGISTER_USER,
        payload,
    };
};
export const userRegisterSuccess = (payload) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload,
    };
};
export const refreshToken = (payload) => {
    return {
        type: REFRESH_TOKEN,
        payload,
    };
};
export const refreshTokenSuccess = (payload) => {
    return {
        type: REFRESH_TOKEN_SUCCESS,
        payload,
    };
};
// snackbar
export const onChangeSnackbar = (open, message, severity) => {
    return {
        type: ONCHANGE_SNACKBAR,
        payload: {
            open,
            message,
            severity,
        },
    };
};
export const closeSnackbar = (payload) => {
    return {
        type: CLOSE_SNACKBAR,
        payload,
    };
};
