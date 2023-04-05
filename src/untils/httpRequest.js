import axios from 'axios';
import { getUserinfo } from './localStorage';
import API_PATHS from '~/sevieces/_API_PATH_';

export const loginApi = async (userInfo) => {
    try {
        const { data, status } = await axios.post(API_PATHS.login, userInfo);
        if (status !== 200 || data?.success === false) {
            throw new Error(data.message || "Can't login!");
        }

        return data;
    } catch (e) {
        console.error(e.message);
    }
};

axios.interceptors.request.use(
    function (config) {
        const user = getUserinfo();
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);
