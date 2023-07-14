import React from "react";
import styled from "styled-components";

const Bottom = styled.footer`
  height: 100%;
  padding: 1rem;
  color: #8a8c8f;
  font-size: 0.7em;
  text-align: center;
  justify-content: center;
`;

const Footer = () => {
  return <Bottom>Copyright &copy; 2023 카카오테크캠퍼스</Bottom>;
};

export default Footer;
