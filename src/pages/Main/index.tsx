import { useSelectedUser } from "@hooks/useSelectedUser";
import { setSelectedUser } from "@redux/selectedUser/slice";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Main() {
  const selectedUser = useSelectedUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const timeStamp = localStorage.getItem("timeStamp") as string;
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(timeStamp, 10);

      if (elapsedTime >= 24 * 60 * 60 * 1000) {
        logOut();
      } else {
        dispatch(setSelectedUser(true));
      }
    } else {
      dispatch(setSelectedUser(false));
    }
  }, []);

  const handleState = () => {
    if (selectedUser) {
      logOut();
    } else {
      navigate("/login");
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginTimestamp");
    dispatch(setSelectedUser(false));
  };

  return (
    <div>
      <UserState onClick={handleState}>
        {selectedUser ? "로그아웃" : "로그인"}
      </UserState>
    </div>
  );
}

export default Main;

const UserState = styled.div`
  cursor: pointer;
`;
