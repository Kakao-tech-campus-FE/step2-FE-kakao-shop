import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import DaumPostcodeEmbed from "react-daum-postcode";
import Button from "../../atoms/Button";
import Box from "../../atoms/Box";

export default function AddressGroup({
  address,
  isPostCodeOpen,
  handlePostCode,
  selectAddress,
}) {
  return (
    <>
      <Box className="flex justify-between items-center w-full">
        <p className="pl-1 text-sm text-gray-600">{address}</p>
        <Button
          padding="px-3 py-1"
          textsize="sm"
          color="white"
          radius="xs"
          border="border"
          onClick={handlePostCode}
        >
          {isPostCodeOpen ? (
            <IoCloseOutline className="text-xl" />
          ) : address !== "주소를 검색해보세요." ? (
            "수정"
          ) : (
            "주소찾기"
          )}
        </Button>
      </Box>
      {isPostCodeOpen && (
        <DaumPostcodeEmbed onComplete={selectAddress} autoClose={false} />
      )}
    </>
  );
}
