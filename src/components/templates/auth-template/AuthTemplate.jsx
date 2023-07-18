import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Styled = {
  Container: styled.article`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Logo: styled.span`
    margin-bottom: 2rem;
    color: black;
    font-size: 2.5rem;
    font-weight: 200;
  `,
};

function AuthTemplate({ title, children }) {
  return (
    <>
      <Helmet>
        <title>{title} - KaKao Auth</title>
      </Helmet>
      <Styled.Container>
        <Styled.Logo>KaKao Auth</Styled.Logo>
        {children}
      </Styled.Container>
    </>
  );
}

AuthTemplate.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

AuthTemplate.defaultProps = {
  children: <div>hi</div>,
  title: "로그인",
};

export default AuthTemplate;
