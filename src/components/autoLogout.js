import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice"

const AutoLogout = () => {
  const dispatch = useDispatch();
  const loginTime = useSelector((state) => state.user.loginTime);

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      dispatch(logoutUser());
    }, 60000); // 1분 후에 자동 로그아웃

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [dispatch]);

  return null;
};

export default AutoLogout;
