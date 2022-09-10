import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './BoxHeadComponent.module.scss';

const cx = classNames.bind(styles);

function BoxHeadComponent({ title, className }) {
    return (
        <div
            className={cx('content__members', 'gird', {
                [className]: className,
            })}
        >
            <div className={cx('content__members--head')}>
                <h4 className={cx('members__head--title')}>{title}</h4>
            </div>
        </div>
    );
}
BoxHeadComponent.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
};
export default BoxHeadComponent;
