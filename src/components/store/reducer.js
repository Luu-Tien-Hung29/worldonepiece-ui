import PropTypes from 'prop-types';

import {
    CLOSE_SNACKBAR,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    ONCHANGE_SNACKBAR,
    REFRESH_TOKEN_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    TAB_LOGIN,
    TOTAL_ITEM_CART,
} from './contant';
import { getUserinfo, saveUserInfo } from '~/untils/localStorage';

export const initState = {
    numberShop: 0,
    tabLogin: 'login',
    isLoading: false,
    snackBar: {
        open: false,
        message: '',
        severity: 'success',
    },
};
function reducer(state = initState, action) {
    switch (action.type) {
        case TOTAL_ITEM_CART:
            return {
                ...state,
                numberShop: action.payload + 1,
            };
        case TAB_LOGIN:
            return {
                ...state,
                tabLogin: action.payload,
            };
        case ONCHANGE_SNACKBAR:
            return {
                ...state,
                isLoading: false,
                snackBar: {
                    open: action.payload.open,
                    message: action.payload.message,
                    severity: action.payload.severity,
                },
            };
        case CLOSE_SNACKBAR:
            return {
                ...state,
                snackBar: {
                    ...state.snackBar,
                    open: action.payload,
                },
            };
        case LOGIN_USER:
            return {
                ...state,
                isLoading: true,
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case REGISTER_USER:
            return {
                ...state,
                isLoading: true,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                tabLogin: 'login',
                isLoading: false,
            };
        case REFRESH_TOKEN_SUCCESS:
            const user = getUserinfo();
            const userInfo = { ...user, accessToken: action.payload.accessToken };
            saveUserInfo(userInfo);
            return;
        default:
            return state;
    }
}
reducer.propTypes = {
    state: PropTypes.node.isRequired,
    action: PropTypes.object.isRequired,
};
export default reducer;
