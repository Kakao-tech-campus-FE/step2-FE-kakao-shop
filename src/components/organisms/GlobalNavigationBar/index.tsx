import InnerContainer from "@components/atoms/InnerContainer";
import Photo from "@components/atoms/Photo";
import { styled } from "styled-components";
import logo from "@assets/images/logoKakao.png";
import { useSelectedUser } from "@hooks/useSelectedUser";
import { setSelectedUser } from "@redux/selectedUser/slice";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const GlobalNavigationBar = () => {
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
    localStorage.removeItem("timeStamp");
    dispatch(setSelectedUser(false));
  };
  return (
    <Wrapper>
      <InnerContainer>
        <Contents>
          <img src={logo} alt={"카카오 로고"} />
          <UserState onClick={handleState}>
            {selectedUser ? "로그아웃" : "로그인"}
          </UserState>
        </Contents>
      </InnerContainer>
    </Wrapper>
  );
};

export default GlobalNavigationBar;

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 100px;
    heigh: 25px;
  }
`;

const UserState = styled.div`
  position: relative;
  margin-left: auto;
  font-size: 14px;
  cursor: pointer;

  &::before {
    position: absolute;
    top: -2px;
    right: 70px;
    width: 1px;
    height: 22px;
    background-color: rgba(34, 34, 34, 0.2);
    content: "";
  }
`;
