import { useState, useEffect } from 'react';
import { getCookie } from '../../constants/cookie';

import Signup from "../atoms/Signup"
import Login from "../atoms/Login"
import Logout from "../atoms/Logout";

const MenuAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie('accessToken');
    console.log("토큰:", token)
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div>
      {isLoggedIn ? 
      (
        <>
          <Logout />
        </>
      ) : 
      (
        <>
          <Signup />
          <a style={{ margin: 10 }}>|</a>
          <Login />
        </>
      )}
    </div>
  );
};

export default MenuAccount;