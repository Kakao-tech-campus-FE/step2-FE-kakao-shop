import React from "react";

import { styled } from "styled-components";

const BreadItem = styled.li`
  display: inline-block;

  & + &::before {
    content: ">";
    margin: 0 8px;
  }
`;

export default function BreadcrumbItem({ children }) {
  return <BreadItem>{children}</BreadItem>;
}
