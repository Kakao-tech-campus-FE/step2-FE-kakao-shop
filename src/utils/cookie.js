export function setCookie(name, value, unixTime) {
  const date = new Date();
  date.setTime(date.getTime() + unixTime);
  document.cookie =
    encodeURIComponent(name) +
    "=" +
    encodeURIComponent(value) +
    ";expires=" +
    date.toUTCString() +
    ";path=/";
}

export function getCookie(name) {
  const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}

export function removeCookie(name) {
  document.cookie =
    encodeURIComponent(name) + "=; expires=Thu, 01 JAN 1999 00:00:10 GMT";
}
