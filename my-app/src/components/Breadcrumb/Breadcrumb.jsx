import React from "react";
import { styled } from "styled-components";

const BreadGroup = styled.ul`
  list-style: none;
`;

export default function Breadcrumb({ children }) {
  return (
    <nav>
      <BreadGroup>{children}</BreadGroup>
    </nav>
  );
}
