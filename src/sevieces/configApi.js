import axios from 'axios';

const API_REACT_APP = process.env.REACT_APP_BASE_URL;
const API_BASE = `${API_REACT_APP}/`;

export const request = axios.create({
    baseURL: API_BASE,
    headers: { Accept: 'application/json, text/plain, */*' },
});

export const getApi = async (url) => {
    try {
        const res = await request.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
getApi();
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
