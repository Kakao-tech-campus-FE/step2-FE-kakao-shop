export const setLocalStorageWithExp = (key, value, ttl) => {
    const now = new Date();
    const item = {value: value, expires: now.getTime() + ttl};
    localStorage.setItem(key, JSON.stringify(item));
};