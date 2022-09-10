import PropTypes from 'prop-types';

import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NavBarItems.module.scss';
import './NavBarItems.module.scss';

const cx = classNames.bind(styles);

function NavBarItems({ children, items }) {
    return (
        <Tippy
            interactive={true}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <ul className={cx('header__sub-bar')}>
                        {items.map((item, index) => (
                            <Link key={index} to={item.to}>
                                <li>
                                    <button>{item.title}</button>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
NavBarItems.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
};
export default NavBarItems;
