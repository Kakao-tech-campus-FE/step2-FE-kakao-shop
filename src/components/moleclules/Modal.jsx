import React from "react";
import Box from "../atoms/Box";
import Button from "../atoms/Button";

const Modal = ({
  titleText,
  contentText,
  buttonText,
  type,
  setModal,
  onClick,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex bg-[rgba(0,0,0,0.5);] p-3">
      <Box className={`m-auto max-w-sm bg-white p-6`}>
        <h3 className="my-2">{titleText}</h3>
        <p className="mb-5 mt-3 text-[13px] text-gray-500">{contentText}</p>
        <Button className={"my-2 text-sm"} onClick={onClick}>
          {buttonText}
        </Button>
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
