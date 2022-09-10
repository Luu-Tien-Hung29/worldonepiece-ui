import PropTypes from 'prop-types';

import { TOTAL_ITEM_CART } from './contant';

export const initState = {
    numberShop: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case TOTAL_ITEM_CART:
            return {
                ...state,
                numberShop: action.payload + 1,
            };
        default:
            throw new Error('Invalid action');
    }
}
reducer.propTypes = {
    state: PropTypes.node.isRequired,
    action: PropTypes.object.isRequired,
};
export default reducer;
