import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Loading.module.scss';
import classNames from 'classnames/bind';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Backdrop, CircularProgress } from '@mui/material';

const cx = classNames.bind(styles);
function Loading({ open, ...props }) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={!open}
        >
            <CircularProgress color="error" />
        </Backdrop>
    );
}

export default Loading;
