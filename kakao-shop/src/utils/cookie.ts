type SetCookieParams = {
  name: string;
  value: string;
  maxAge: number;
};

// path '/' 모든페이지에서 쿠키에 접근한다.
export const setCookie = ({ name, value, maxAge }: SetCookieParams) => {
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/`;
};

// 이름과 매칭되는 쿠키를 얻는다.
export const getCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

// max-age 가 음수인 경우 쿠키를 삭젠
export const deleteCookie = (name: string) => {
  document.cookie = `${encodeURIComponent(name)}=; max-age=-1; path=/  `;
};
