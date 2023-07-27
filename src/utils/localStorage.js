export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const setLocalStorageWithExp = (key, value, ttl) => {
  const now = new Date();
  const item = { value: value, expires: now.getTime() + ttl };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};
