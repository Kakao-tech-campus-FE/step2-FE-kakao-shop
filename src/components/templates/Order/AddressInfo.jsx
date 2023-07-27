import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import RequestSelectBox from "../../molecules/Order/RequestSelectBox";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import AddressGroup from "../../organisms/Order/AddressGroup";
import { getAddress } from "../../../utils/convert";
import { OPTIONS } from "../../../utils/constant";

export default function AddressInfo({
  address,
  setAddress,
  selected,
  setSelected,
}) {
  const [isOpen, setIsOpen] = useState(true);
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
        padding="px-5 py-3"
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
