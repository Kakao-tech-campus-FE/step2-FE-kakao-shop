import React, { forwardRef } from "react";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";

const AgreeModal = forwardRef((props, ref) => {
  return (
    <dialog
      className="backdrop:bg-black backdrop:opacity-40 px-0 pt-7 pb-0"
      ref={ref}
    >
      <Container className="flex flex-col w-72">
        <p className="px-7 pt-2 pb-6 text-sm text-gray-500 border-b">
          카카오페이 구매조건(결제조건) 확인 동의를 체크해 주세요.
        </p>
        <Button padding="py-3" onClick={() => ref.current.close()}>
          확인
        </Button>
      </Container>
    </dialog>
  );
});

export default AgreeModal;
