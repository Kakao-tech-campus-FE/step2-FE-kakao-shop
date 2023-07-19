import InnerContainer from "@components/atoms/InnerContainer";
import { styled } from "styled-components";
import logo from "@assets/images/logoKakao.png";
import cart from "@assets/images/cart.png";
import { useSelectedUser } from "@hooks/useSelectedUser";
import { setSelectedUser } from "@redux/selectedUser/slice";
import { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginModal from "@components/molecules/LoginModal";

const GlobalNavigationBar = () => {
  const selectedUser = useSelectedUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

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

  const handleCart = () => {
    if (selectedUser) {
      navigate("/cart");
    } else {
      setModalOpen(true);
    }
  };

  const handleModal = () => {
    setModalOpen(false);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("timeStamp");
    dispatch(setSelectedUser(false));
  };
  return (
    <>
      <Wrapper>
        <InnerContainer>
          <Contents>
            <img src={logo} alt={"카카오 로고"} onClick={() => navigate("/")} />
            <ImgWrapper>
              <img src={cart} alt={"장바구니"} onClick={handleCart} />
            </ImgWrapper>
            <UserState onClick={handleState}>
              {selectedUser ? "로그아웃" : "로그인"}
            </UserState>
          </Contents>
        </InnerContainer>
      </Wrapper>
      {modalOpen && <LoginModal onClick={handleModal} />}
    </>
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

  & > img {
    width: 100px;
    cursor: pointer;
  }
`;

const UserState = styled.div`
  position: relative;
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

const ImgWrapper = styled.div`
  margin-left: auto;
  margin-right: 50px;

  & > img {
    width: 36px;
    height: 36px;
    cursor: pointer;
  }
`;
