/* eslint-disable no-dupe-keys */
import axios from 'axios';
import { getUserinfo, saveUserInfo } from '~/untils/localStorage';
import API_PATHS from './_API_PATH_';

const API_REACT_APP = process.env.REACT_APP_BASE_URL;
const API_BASE = `${API_REACT_APP}/`;
const userInfo = getUserinfo();
const refreshToken = async (body) => {
    const data = await postApi(API_PATHS.refresh, body);
    return data;
};
// export const request = axios.create({
//     baseURL: API_BASE,
//     headers: {
//         Accept: 'application/json, text/plain, */*',
//         Authorization: `Bearer ${userInfo?.accessToken}`,
//         x_authorization: userInfo?.accessToken,
//     },
// });

export const request = axios.create();
request.interceptors.request.use(
    async (config) => {
        config.baseURL = API_BASE;
        config.headers = {
            Authorization: `Bearer ${getUserinfo()?.accessToken}`,
            Accept: 'application/json, text/plain, */*',
            x_authorization: getUserinfo()?.accessToken,
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

// Response interceptor for API calls

request.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if (error?.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            const data = await refreshToken({ refreshToken: userInfo?.refreshToken });
            request.defaults.headers.common.Authorization = 'Bearer ' + data?.data?.accessToken;
            request.defaults.headers.common.x_authorization = data?.data?.accessToken;
            saveUserInfo({
                ...userInfo,
                accessToken: data?.data?.accessToken,
            });
            return request(originalRequest);
        }
        return Promise.reject(error);
    },
);
export const getApi = async (url) => {
    try {
        const res = await request.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const putApi = async (url, data) => {
    try {
        const res = await request.put(`${url}/${data.id}`, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteApi = async (url, id) => {
    try {
        const res = await request.delete(`${url}/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const postApi = async (url, data) => {
    try {
        const res = await request.post(url, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
