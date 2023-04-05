import { call, put, takeLatest } from 'redux-saga/effects';
import API_PATHS from '~/sevieces/_API_PATH_';
import { postApi, request } from '~/sevieces/configApi';
import { LOGIN_USER } from './contant';
import { onChangeSnackbar, userLoginSuccess } from './action';
import { saveUserInfo } from '~/untils/localStorage';

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

export default function* rootSaga() {
    yield takeLatest(LOGIN_USER, fetchUserLogin);
}
