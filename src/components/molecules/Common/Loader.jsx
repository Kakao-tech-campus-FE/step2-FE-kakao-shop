import React from "react";
import { RotatingLines } from "react-loader-spinner";
import Container from "../../atoms/Container";

export default function Loader({ className, height }) {
  return (
    <Container
      className={`${className} flex justify-center items-center w-full ${height}`}
    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="1"
        width="40"
        visible
      />
    </Container>
  );
}
