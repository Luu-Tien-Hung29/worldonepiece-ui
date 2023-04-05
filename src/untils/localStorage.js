export function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
export function getData(key) {
    try {
        const data = localStorage.getItem(key);
        return data && JSON.parse(data);
    } catch (err) {
        console.error(err.message);
    }
}
export function removeData(key) {
    localStorage.removeItem(key);
}

export function getUserinfo() {
    return getData('userInfo');
}
export function getAccessToken() {
    try {
        const userInfo = getData('userInfo');
        return userInfo.accessToken;
    } catch (err) {
        console.error(err.message);
    }
}

export function saveUserInfo(data) {
    setData('userInfo', data);
}

export function destroyUser() {
    removeData('userInfo');
}
