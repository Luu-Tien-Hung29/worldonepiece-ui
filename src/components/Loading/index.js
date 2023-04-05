import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Loading.module.scss';
import classNames from 'classnames/bind';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Loading({ open, ...props }) {
    return (
        <div className={cx('box_loading', `${open ? 'show' : ''}`)}>
            <div className={cx('box_icon')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCircleNotch} />
            </div>
        </div>
    );
}

export default Loading;
