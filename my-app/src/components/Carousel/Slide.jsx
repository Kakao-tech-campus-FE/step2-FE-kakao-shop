import React from "react";
import { styled } from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 50vh;
`;

export default function Slide({ image }) {
  return <Image src={image} />;
}
