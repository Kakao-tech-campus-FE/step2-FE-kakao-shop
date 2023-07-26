import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";

export const useAutoLogout = () => {
  const dispatch = useDispatch();
  const expiry = useSelector((state) => state.user.expiry);
  const now = new Date().getTime();

  console.log(now);
  useEffect(() => {
    // 만료 시간과 현재 시간을 비교하여 setTimeout으로 자동 로그아웃
    const timeUntilLogout = expiry - now;
    const logoutTimer = setTimeout(() => {
      dispatch(logoutUser());
    }, timeUntilLogout);

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [dispatch, expiry, now]);
};
