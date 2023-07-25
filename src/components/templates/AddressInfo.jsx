import React, { useState } from "react";
import RequestSelectBox from "../molecules/RequestSelectBox";
import Button from "../atoms/Button";
import { getAddress } from "../../utils/convert";
import Container from "../atoms/Container";
import { SlArrowDown } from "react-icons/sl";
import AddressGroup from "../organisms/AddressGroup";

const OPTIONS = [
  { value: "placeholder", name: "배송 요청사항을 선택해주세요" },
  { value: "option1", name: "배송전 연락바랍니다." },
  { value: "option2", name: "부재시 경비실에 맡겨주세요." },
  { value: "option3", name: "부재시 연락주세요." },
];

export default function AddressInfo() {
  const [isOpen, setIsOpen] = useState(true);
  const [address, setAddress] = useState("주소를 검색해보세요.");
  const [selected, setSelected] = useState(OPTIONS[0].name);
  const [isPostCodeOpen, setIsPostCodeOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const handlePostCode = () => {
    setIsPostCodeOpen((prev) => !prev);
  };
  const selectAddress = (data) => {
    setAddress(getAddress(data));
    setIsPostCodeOpen(false);
  };
  const handleSelectBoxChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <section className="flex flex-col bg-white border-y">
      <Button
        className="flex justify-between items-center"
        padding=" px-5 py-3"
        onClick={handleOpen}
      >
        <p className="text-lg font-extrabold">배송지 정보</p>
        <SlArrowDown className={isOpen ? "rotate-180" : ""} />
      </Button>
      {isOpen && (
        <Container className="flex flex-col items-start gap-2 px-5 pb-3">
          <AddressGroup
            address={address}
            isPostCodeOpen={isPostCodeOpen}
            handlePostCode={handlePostCode}
            selectAddress={selectAddress}
          />
          <RequestSelectBox
            options={OPTIONS}
            selected={selected}
            onChange={handleSelectBoxChange}
          />
        </Container>
      )}
    </section>
  );
}
