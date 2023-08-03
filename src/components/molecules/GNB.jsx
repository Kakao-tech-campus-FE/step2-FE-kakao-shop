import React from "react";
import img from '../../assets/logoKakao.png';
import cart from "../../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setUser } from "../../store/slices/userSlice";
import { useState } from "react";

const staticServerUri = process.env.REACT_APP_PATH || "";

const GNB = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const setExpired = useState(false);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        const { value, expires } = storedUser;
        if (expires && Date.now() > expires) {
          handleLogOut();
          setExpired(true);
        } else {
          dispatch(setUser({ user: value }));
        }
      }
    } catch (error) {
      console.error("parsing error", error);
    }
  }, [user, dispatch]);


  const handleLogOut = () => {
    if (user) {
      dispatch(setEmail({ user: null }));
      localStorage.removeItem("user");
      window.location.reload();
    }
  };
    useEffect(() => {
      try {
        const isAuthenicated = JSON.parse(localStorage.getItem("user"));
        if (isAuthenicated) {
            dispatch(setUser({
                user: isAuthenicated.value,
            }));
        }
    } catch (error) {
        console.error("parsing error", error);
    }
    }, [user, dispatch]);

    

  return (
    <header className="w-full border-b-2 border-gray-300">
      <Link to=staticServerUri + "/" className="flex items-center px-4 py-3">
        <img src=staticServerUri + {img} alt="카카오 쇼핑하기" className="w-30 h-10" />
        <div className="ml-auto flex items-center space-x-4">
          <Link to=staticServerUri + "/cart">
            <img src=staticServerUri + {cart} alt="장바구니 버튼" className="w-8 h-8" />
          </Link>
          {user ? (
            <Link
              to=staticServerUri + "/"
              className="text-300 border-l pl-4"
              onClick={handleLogOut}
            >
              로그아웃
            </Link>
          ) : (
            <>
              <Link to= staticServerUri + "/login" className="text-300">
                로그인
              </Link>
              <Link
                to=staticServerUri + "/signup"
                className="text-300 border-l pl-4"
              >
                회원가입
              </Link>
            </>
          )}
        </div>
      </Link>
    </header>
  );
};

export default GNB;
