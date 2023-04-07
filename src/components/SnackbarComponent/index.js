/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from 'react-redux';
// import ReactDOM from 'react-dom';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { closeSnackbar } from '../store/action';
import classNames from 'classnames/bind';
import styles from './Snackbar.module.scss';

const cx = classNames.bind(styles);

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarComponent({ runSnackBar, content, severity, ...props }) {
    const dispacth = useDispatch();
    const [openTime, setOpenTime] = React.useState(false);
    React.useEffect(() => {
        if (runSnackBar) {
            setOpenTime(3000);
        }
    }, [content]);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispacth(closeSnackbar(false));
    };
    // return ReactDOM.createPortal(
    // 	<div className={classes.root}>
    // 		<Snackbar
    // 			open={runSnackBar}
    // 			autoHideDuration={openTime}
    // 			onClose={handleClose}
    // 			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    // 		>
    // 			<Alert onClose={handleClose} severity={severity}>
    // 				{content}
    // 			</Alert>
    // 		</Snackbar>
    // 	</div>,
    // 	document.body,
    // )
    return (
        <div>
            <Snackbar
                className={cx('snackbar')}
                open={runSnackBar}
                autoHideDuration={openTime}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity={severity}>
                    {content}
                </Alert>
            </Snackbar>
        </div>
    );
}
export default SnackbarComponent;
