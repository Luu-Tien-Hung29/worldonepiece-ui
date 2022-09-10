import { TOTAL_ITEM_CART } from './contant';

export const totalItemCart = (payload) => {
    return {
        type: TOTAL_ITEM_CART,
        payload,
    };
};
