import styled from "styled-components";
import Loader from "@/components/atoms/loader/Loader.jsx";

const Styled = {
  Container: styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Text: styled.span`
    padding-top: 0.25rem;
  `,
};

function GlobalLoader() {
  return (
    <Styled.Container>
      <Loader />
      <Styled.Text>페이지 로딩 중</Styled.Text>
    </Styled.Container>
  );
}

export default GlobalLoader;
