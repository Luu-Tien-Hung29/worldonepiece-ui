import PropTypes from 'prop-types';

import Header from '~/Layouts/components/Header';

function OnlyHeaderLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}
OnlyHeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default OnlyHeaderLayout;
