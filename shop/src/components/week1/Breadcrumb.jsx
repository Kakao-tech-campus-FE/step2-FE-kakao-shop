import styled from "styled-components";
import React from "react";

// 경로 전체를 나타내는 컨테이너 역할 
const Breadcrumbs = ({ children }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbList>{children}</BreadcrumbList>
    </BreadcrumbContainer>
  );
};

// 경로 컴포넌트로 링크를 포함한다. 
// isCurrentPage : 현재 페이지 여부
const Crumb = ({ href, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const BreadcrumbContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px; 
  background-color: #008080;
  z-index: 9;
`;

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
  color: #fff;
`;

const CrumbWrapper = styled.li`
  font-size: 20px;
  display: inline;
  --spacing: 12px;
  &:not(:first-child) {
    margin-left: var(--spacing);
    &::before {
      content: "/";
      opacity: 0.25;
      margin-right: var(--spacing);
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Breadcrumb = () => {
  return (
    <Breadcrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/Toggle">Toggle</Crumb>
      <Crumb href="/Toggle/Checkbox">Checkbox</Crumb>
      <Crumb href="/Toggle/Checkbox/Radio" >Radio</Crumb>
      <Crumb href="/Toggle/Checkbox/Radio/Toast" >Toast</Crumb>
      <Crumb href="/Toggle/Checkbox/Radio/Toast/Carousel" >Carousel</Crumb>
    </Breadcrumbs>
  );
};

export default Breadcrumb;