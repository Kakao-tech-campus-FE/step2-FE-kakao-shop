import React from "react";
import styled from "styled-components";

const Footertext = styled.footer`
  height: 100%;
  padding: 1rem;
  color: gray;
  font-size: 1em;
  text-align: left;
`;

const Footer = () => {
  return <Footertext>Copyright &copy; 2023 카카오테크캠퍼스</Footertext>;
};

export default Footer;
