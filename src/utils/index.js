export const setExprirationTime = () => {
  const currentTime = new Date().getTime();
  const expirationTime = currentTime + 60 * 60 * 1000; // 1시간 후의 시간
  // 로그인 성공 후 expirationTime을 로컬스토리지에 저장
  localStorage.setItem("loginExpirationTime", expirationTime.toString());
};
