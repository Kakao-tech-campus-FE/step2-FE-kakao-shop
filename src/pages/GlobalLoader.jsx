import { Dna } from "react-loader-spinner";
import styled from "styled-components";

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
      <Dna
        visible={true}
        ariaLabel="dna-loading"
        wrapperStyle={{ width: "100px", height: "100px" }}
        wrapperClass="dna-wrapper"
      />
      <Styled.Text>페이지 로딩 중</Styled.Text>
    </Styled.Container>
  );
}

export default GlobalLoader;
