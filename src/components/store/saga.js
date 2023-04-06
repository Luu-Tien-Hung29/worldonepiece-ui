import { call, put, takeLatest } from 'redux-saga/effects';
import API_PATHS from '~/sevieces/_API_PATH_';
import { postApi, request } from '~/sevieces/configApi';
import { LOGIN_USER, REFRESH_TOKEN, REGISTER_USER } from './contant';
import { onChangeSnackbar, userLoginSuccess, userRegisterSuccess } from './action';
import { saveUserInfo } from '~/untils/localStorage';
import { postApiToken, requestToken } from '~/sevieces/configApiToken';

function* fetchUserLogin(action) {
    const { payload } = action;
    const { userName, password, savePass } = payload;
    const body = { userName, password, savePass };
    try {
        const data = yield call([request, () => postApi(API_PATHS.login, body)]);
        if (data.responseCode === 200 && data.type.toLowerCase() === 'success') {
            yield put(onChangeSnackbar(true, data.message || 'Đăng nhập thành công', 'success'));
            yield put(userLoginSuccess(data.data));
            saveUserInfo(data.data);
        } else {
            yield put(onChangeSnackbar(true, data.message || 'Đăng nhập thất bại!', 'error'));
        }
    } catch (e) {
        console.log(e.message);
        yield put(onChangeSnackbar(true, e.message || 'Đăng nhập thất bại!', 'error'));
    }
}
function* fetchUserRegister(action) {
    const { payload } = action;
    const { userName, password, confirmPassword } = payload;
    const body = { userName, password, confirmPassword };
    try {
        const data = yield call([request, () => postApi(API_PATHS.register, body)]);
        if (data.responseCode === 200 && data.type.toLowerCase() === 'success') {
            yield put(onChangeSnackbar(true, data.message || 'Đăng ký thành công', 'success'));
            yield put(userRegisterSuccess(data.data));
            saveUserInfo(data.data);
        } else {
            yield put(onChangeSnackbar(true, data.message || 'Đăng ký thất bại!', 'error'));
        }
    } catch (e) {
        console.log(e.message);
        yield put(onChangeSnackbar(true, e.message || 'Đăng ký thất bại!', 'error'));
    }
}
function* fetchRefreshToken(action) {
    const { payload } = action;
    const { refreshToken } = payload;
    const body = { refreshToken };
    try {
        const data = yield call([requestToken, () => postApiToken(API_PATHS.refresh, body)]);
        if (data.responseCode === 200 && data.type.toLowerCase() === 'success') {
            yield put(userRegisterSuccess(data.data));
        } else {
            console.log(data, 'data err');
        }
    } catch (e) {
        console.log(e.message);
    }
}

export default function* rootSaga() {
    yield takeLatest(LOGIN_USER, fetchUserLogin);
    yield takeLatest(REGISTER_USER, fetchUserRegister);
    yield takeLatest(REFRESH_TOKEN, fetchRefreshToken);
}
