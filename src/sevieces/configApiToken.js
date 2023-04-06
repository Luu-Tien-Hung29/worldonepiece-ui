import axios from 'axios';
import { getUserinfo } from '~/untils/localStorage';

const API_REACT_APP = process.env.REACT_APP_BASE_URL;
const API_BASE = `${API_REACT_APP}/`;
const user = getUserinfo();

export const requestToken = axios.create({
    baseURL: API_BASE,
    headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: `Bearer ${user.accessToken}`,
    },
});

export const getApiToken = async (url) => {
    try {
        const res = await requestToken.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const putApiToken = async (url, data) => {
    try {
        const res = await requestToken.put(`${url}/${data.id}`, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteApiToken = async (url, id) => {
    try {
        const res = await requestToken.delete(`${url}/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const postApiToken = async (url, data) => {
    try {
        const res = await requestToken.post(url, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
