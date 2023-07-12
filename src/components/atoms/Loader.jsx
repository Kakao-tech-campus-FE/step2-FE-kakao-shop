import React from "react";
import { RotatingLines } from "react-loader-spinner";
import Container from "./Container";

export default function Loader({ height }) {
  return (
    <Container className={`flex justify-center items-center w-full ${height}`}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="1"
        width="40"
        visible={true}
      />
    </Container>
  );
}
