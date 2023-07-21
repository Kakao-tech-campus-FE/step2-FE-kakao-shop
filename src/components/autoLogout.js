import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice";

export const useAutoLogout = () => {
  const dispatch = useDispatch();
  const loginTime = useSelector((state) => state.user.loginTime);

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      dispatch(logoutUser());
    }, 3600000);

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [dispatch]);
};
