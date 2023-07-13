import React from "react";
import Box from "../atoms/Box";
import Button from "../atoms/Button";

const Modal = ({
  titleText, // 모달 제목
  contentText, // 모달 내용
  buttonText, // 모달 버튼 이름
  type, // 아떤 종류의 모달인지
  setModal, // 모달 상태 변화 함수
  onClick, // 모달 버튼 onCLick 핸들러
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex bg-[rgba(0,0,0,0.5);] p-3">
      <Box className={`m-auto max-w-sm bg-white p-6`}>
        <h3 className="my-2">{titleText}</h3>
        <p className="mb-5 mt-3 text-[13px] text-gray-500">{contentText}</p>
        <Button className={"my-2 text-sm"} onClick={onClick}>
          {buttonText}
        </Button>
        {/* 이메일 중복확인 모달에는 다시 입력 버튼이 있음 */}
        {type === "duplicateEmail" && (
          <Button
            valid={"gray"}
            className={"text-sm"}
            onClick={() => {
              setModal("");
            }}
          >
            다시 입력
          </Button>
        )}
      </Box>
    </div>
  );
};

export default Modal;
