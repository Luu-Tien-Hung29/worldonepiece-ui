import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ButtonFoot.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
function ButtonFoot({ title, className, to }) {
    return (
        <div
            className={cx('more-shop', {
                [className]: className,
            })}
        >
            <Link to={to || config.routes.Shop}>{title}</Link>
        </div>
    );
}
ButtonFoot.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
};
export default ButtonFoot;
