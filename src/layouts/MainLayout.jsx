import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Container>
      {/* 로그인 버튼, 장바구니 버튼, 메인 로고*/}
      <GNB /> 
      <br/>
      <br/>
      <br/>
      <br />
      {/*콘텐츠 영역: 페이지마다 달라지는 영역*/}
      <Outlet />
      {/*footer 영역*/}
      {/* <Footer/> */}
    </Container>
  )
}

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1200px;
`;