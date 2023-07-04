
export const login = (username, password) => async dispatch => {
  // 로그인 API 호출 등 로그인 처리 로직 작성
  const user = { id: 1, username: "exampleUser" };
	try {
		/* 이 부분에 await API 호출이 들어오고, 성공하면 SUCCESS, 
			 실패하면 ERROR 발생으로 FAILED.               */
		dispatch(loginSuccess(user));
    localStorage.setItem('isLoggedIn', calculateTomorrowTime());
    localStorage.setItem('userInfo', user.username);
    console.log(calculateTomorrowTime());
    // setCookie('isLoggedIn', 'true', 1); // 1일 동안 유지되는 쿠키
    // setCookie('username', username, 1);
	} catch (error) {
			dispatch(logout());
			throw error;
	}
};

const calculateTomorrowTime = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const year = currentDate.getFullYear().toString().padStart(4, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const formattedTime = year + month + day + hours + minutes;
  return formattedTime;
}
  // const setCookie = (name, value, days) => { //입력받은 days 만큼의 유효기간 가진 쿠키 생성 메소드
  //   const expirationDate = new Date();
  //   expirationDate.setDate(expirationDate.getDate() + days);
  //   const cookieValue = encodeURIComponent(value) + (days ? `; expires=${expirationDate.toUTCString()}` : '');
  //   document.cookie = `${name}=${cookieValue}; path=/`;
  // };

  // 로그아웃 액션 반환
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
export const loginSuccess = (user) => {
	return {
		type: "LOGIN_SUCCESS",
		user: user
	};
};