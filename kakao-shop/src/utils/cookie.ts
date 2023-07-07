type SetCookieParams = {
  name: string;
  value: string;
  maxAge: number;
};

export const setCookie = ({ name, value, maxAge }: SetCookieParams) => {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(`${name}=([^;]*)`));

  return matches ? decodeURIComponent(matches[1]) : null;
};

export const deleteCookie = (name: string) => {
  document.cookie = `${encodeURIComponent(name)}=; max-age=-1; path=/  `;
};
