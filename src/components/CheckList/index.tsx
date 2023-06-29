import React from "react";
import { styled } from "styled-components";
import CheckItem from "./CheckItem";

const CheckList = () => {
  return (
    <Wrapper>
      <CheckItem
        data={{ id: "4", value: "밥", text: "밥" }}
        color={"#28a745"}
      />
      <CheckItem
        data={{ id: "5", value: "빵", text: "빵" }}
        color={"#28a745"}
      />
      <CheckItem
        data={{ id: "6", value: "음료", text: "음료" }}
        color={"#28a745"}
      />
    </Wrapper>
  );
};

export default CheckList;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px;
`;
