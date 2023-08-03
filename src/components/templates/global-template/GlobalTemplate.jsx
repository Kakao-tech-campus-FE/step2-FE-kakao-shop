import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import GlobalNavBar from "@/components/organisms/global-navigation-bar/GlobalNavBar.jsx";

const Styled = {
  Container: styled.main`
    width: 100vw;
    min-height: 100vh;
    overflow-x: auto;
  `,
  Section: styled.section`
    width: 100vw;
    padding: 4rem 4rem 0;
    box-sizing: border-box;
    @media screen and (max-width: 576px) {
      padding: 4rem 0 0;
    }
  `,
};

function GlobalTemplate({ title, children, isStorybookMode, ...props }) {
  return (
    <>
      <Helmet>
        <title>{title ? title : "카카오톡 쇼핑하기"}</title>
      </Helmet>
      <Styled.Container {...props}>
        <GlobalNavBar isStorybookMode={isStorybookMode} />
        <Styled.Section>{children}</Styled.Section>
      </Styled.Container>
    </>
  );
}

GlobalTemplate.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isStorybookMode: PropTypes.bool,
};

GlobalTemplate.defaultProps = {
  title: null,
  children: null,
  isStorybookMode: false,
};

export default GlobalTemplate;
