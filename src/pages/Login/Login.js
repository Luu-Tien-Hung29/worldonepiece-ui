/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Checkbox, Grid, TextField } from '@mui/material';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import { tabLogin } from '~/components/store/selector';
import { changeTabLogin, userLogin, userRegister } from '~/components/store/action';
import { getUserinfo } from '~/untils/localStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Login() {
    const [state, setState] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        savePass: false,
    });
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState({
        userName: false,
        password: false,
        confirmPassword: false,
    });
    const dispatch = useDispatch();
    const tab_login = useSelector(tabLogin);
    const navigate = useNavigate();
    const [tab, setTab] = useState('login');
    const userInfo = getUserinfo();
    useEffect(() => {
        if (userInfo) {
            navigate(config.routes.Home);
        }
    }, [userInfo]);
    useEffect(() => {
        setTab(tab_login);
    }, [tab_login]);
    const handleChangeState = (name, e) => {
        const value = e?.target?.value;
        const valueChecked = e?.target?.checked;
        if (name === 'savePass') {
            setState({ ...state, [name]: valueChecked });
        } else {
            setState({ ...state, [name]: value });
        }
    };
    const handleLogin = () => {
        if (!state.userName || !state.password || (tab === 'register' && !state.confirmPassword)) {
            let obj = {};
            for (let key in state) {
                if (!state[key]) {
                    obj[key] = true;
                }
            }
            setError({ ...obj });
        } else {
            setError({});
            if (tab === 'login') {
                dispatch(userLogin(state));
            } else {
                dispatch(userRegister(state));
            }
        }
    };
    const handleSelectTab = (type) => {
        if (type === 'login') {
            dispatch(changeTabLogin('login'));
        } else {
            dispatch(changeTabLogin('register'));
        }
    };
    return (
        <div className={cx('container')}>
            <div className={cx('box-login')}>
                <Box className={cx('box')} sx={{ flexGrow: 1 }}>
                    <Grid height={'100%'} container>
                        <Grid className={cx('content-login')} height={'100%'} item xs={4}>
                            <div className={cx('header')}>
                                <img className={cx('header__logo')} src={images.logo} alt="" />
                                <p className={cx('contain')}>World one piece</p>
                            </div>
                            <div className={cx('body-content')}>
                                <TextField
                                    className={cx('input-body')}
                                    label="User Name"
                                    fullWidth
                                    variant="standard"
                                    value={state.userName}
                                    onChange={(e) => handleChangeState('userName', e)}
                                    required
                                    helperText={error.userName ? 'Vui lòng nhập trường này' : null}
                                    error={error.userName}
                                />
                                <div className={cx('box-pass')}>
                                    <TextField
                                        label="Password"
                                        fullWidth
                                        type={showPass ? 'text' : 'password'}
                                        variant="standard"
                                        value={state.password}
                                        onChange={(e) => handleChangeState('password', e)}
                                        className={cx('input-body')}
                                        required
                                        helperText={error.password ? 'Vui lòng nhập trường này' : null}
                                        error={error.password}
                                    />
                                    <i
                                        className={cx('icon-pass')}
                                        onClick={() => {
                                            setShowPass(!showPass);
                                        }}
                                    >
                                        {showPass ? (
                                            <FontAwesomeIcon icon={faEyeSlash} />
                                        ) : (
                                            <FontAwesomeIcon icon={faEye} />
                                        )}
                                    </i>
                                </div>

                                {tab === 'register' ? (
                                    <TextField
                                        label="Confirm password"
                                        fullWidth
                                        variant="standard"
                                        type="password"
                                        value={state.confirmPassword}
                                        onChange={(e) => handleChangeState('confirmPassword', e)}
                                        className={cx('input-body')}
                                        required
                                        helperText={error.confirmPassword ? 'Vui lòng nhập trường này' : null}
                                        error={error.confirmPassword}
                                    />
                                ) : null}
                                {tab === 'login' ? (
                                    <div style={{ marginTop: '-10px' }}>
                                        <Checkbox
                                            checked={state.savePass}
                                            onChange={(e) => handleChangeState('savePass', e)}
                                        />{' '}
                                        <span>Save Account</span>
                                    </div>
                                ) : null}
                                <div className={cx('btn-login')}>
                                    <Button onClick={handleLogin} variant="contained" size="large">
                                        {tab === 'login' ? 'Login' : 'Rgister'}
                                    </Button>
                                </div>
                            </div>
                            <div className={cx('foot')}>
                                Made by <span>Mr.Hưng</span>
                            </div>
                        </Grid>
                        <Grid className={cx('image')} height={'100%'} item xs={8}>
                            <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
                                <Grid container>
                                    <Grid height={'100%'} item xs={8}></Grid>
                                    <Grid className={cx('item')} height={'100%'} item xs={4}>
                                        <div
                                            onClick={() => {
                                                navigate(config.routes.Home);
                                            }}
                                        >
                                            Home
                                        </div>
                                        <div onClick={() => handleSelectTab('login')}>Login</div>
                                        <div onClick={() => handleSelectTab('register')}>Register</div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}

export default Login;
