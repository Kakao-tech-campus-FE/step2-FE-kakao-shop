import React from "react";
import Box from "../atoms/Box";
import CheckBox from "../molecules/CheckBox";
import Container from "../atoms/Container";

export default function CheckList({
  isFirstChecked,
  isSecondChecked,
  onAllChange,
  onChange,
}) {
  return (
    <>
      <Box className="px-5 py-3 text-lg font-extrabold border-b">
        <CheckBox
          size="w-5 h-5"
          checked={isFirstChecked && isSecondChecked}
          onChange={onAllChange}
        >
          전체 동의하기
        </CheckBox>
      </Box>
      <Container className="flex flex-col gap-3 p-5 text-[15px] border-b">
        <Box>
          <CheckBox
            id="checkbox1"
            size="w-5 h-5"
            checked={isFirstChecked}
            onChange={onChange}
          >
            구매조건 확인 및 결제 진행 동의
          </CheckBox>
        </Box>
        <Box>
          <CheckBox
            id="checkbox2"
            size="w-5 h-5"
            checked={isSecondChecked}
            onChange={onChange}
          >
            개인정보 제3자 제공 동의
          </CheckBox>
        </Box>
      </Container>
    </>
  );
}
