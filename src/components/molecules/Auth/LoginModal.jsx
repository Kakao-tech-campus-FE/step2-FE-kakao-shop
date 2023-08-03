import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";

const LoginModal = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <dialog
      className="backdrop:bg-black backdrop:opacity-40 px-0 pt-7 pb-0"
      ref={ref}
    >
      <Container className="w-72">
        <p className="px-7 pt-2 pb-6 text-sm text-gray-500 border-b">
          로그인이 필요한 메뉴입니다.
          <br />
          로그인 하시겠습니까?
        </p>
        <Box>
          <Button
            padding="py-3"
            width="w-1/2"
            border="border-r"
            onClick={() => ref.current.close()}
          >
            취소
          </Button>
          <Button
            padding="py-3"
            width="w-1/2"
            onClick={() => navigate("/login")}
          >
            확인
          </Button>
        </Box>
      </Container>
    </dialog>
  );
});

export default LoginModal;
