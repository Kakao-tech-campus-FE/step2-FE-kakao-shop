import { useEffect, useState } from "react";
import Toast from "../../components/Toast/Dialog";
import Radio from "../../components/Radio/Radio";
import Toggle from "../../components/Toggle/ToggleButton";
import CheckBox from "../../components/CheckBox/CheckBox";
import "./Mainpage.css";

const allCondition = {
  label: "전체 동의하기",
  value: "allCondition",
};
const conditionOptions = [
  {
    label: "카카오페이 결제조건 및 개인정보 제3자 제공 동의",
    id: "kakaoPay",
  },
  { label: "개인정보 제3자 제공 동의", id: "privateInfo" },
];
const payOptions = [
  { label: "카카오페이머니", id: "payMoney" },
  { label: "카카오페이카드", id: "payCard" },
];
const receiptOptions = [
  { label: "현금영수증 발급신청", id: "cashReceipt" },
  { label: "발급안함", id: "noReceipt" },
];

function Mainpage() {
  const [isPayCondShowToast, setIsPayCondShowToast] = useState(false);
  const [isReceiptNumShowToast, setIsReceiptNumShowToast] = useState(false);
  const [checkedPayOption, setCheckedPayOption] = useState(payOptions[0].value);
  const [checkedReceiptOption, setCheckedReceiptOption] = useState(
    receiptOptions[0].value
  );
  const [isCheckedToggle, setIsCheckedToggle] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");

  const handleShowToast = (setIsShowToast) => {
    setIsShowToast((prev) => !prev);
  };
  const inputReceiptNumber = (event) => {
    setReceiptNumber(event.target.value);
  };

  // Radio마다 다르게 함수를 만들어 줘야 하는가?, 하나의 핸들러 함수로 관리할 수 없을까?
  // -> 하나의 함수로 만든 뒤 setState 함수를 인수로 준다
  const handleOptionChange = (event, setCheckedOption) => {
    setCheckedOption(event.target.value);
  };
  const handleToggle = () => {
    setIsCheckedToggle((prev) => !prev);
  };
  const handlePay = () => {
    if (isAllChecked) {
      if (checkedReceiptOption === "noReceipt") {
        alert("결제가 완료되었습니다.");
      } else {
        if (receiptNumber.length > 0) alert("결제가 완료되었습니다.");
        else handleShowToast(setIsReceiptNumShowToast);
      }
    } else handleShowToast(setIsPayCondShowToast);
  };

  useEffect(() => {
    if (checkedReceiptOption === "noReceipt") setReceiptNumber("");
  }, [checkedReceiptOption]);

  return (
    <div className="main-container">
      {isPayCondShowToast && (
        <Toast
          className="toast"
          handleToast={() => handleShowToast(setIsPayCondShowToast)}
        >
          카카오페이 구매조건(결제조건) 확인 동의를 체크해 주세요.
        </Toast>
      )}
      {isReceiptNumShowToast && (
        <Toast
          className="toast"
          handleToast={() => handleShowToast(setIsReceiptNumShowToast)}
        >
          현금영수증을 발행할 번호를 입력해주세요.
        </Toast>
      )}
      <div className="costTxt">
        <span>일반결제금액</span>
        <span>425,900원</span>
      </div>
      <Radio
        className="payRadio"
        options={payOptions}
        defaultChecked={checkedPayOption}
        onChange={(event) => handleOptionChange(event, setCheckedPayOption)}
      />
      <Radio
        className="receiptRadio"
        options={receiptOptions}
        defaultChecked={checkedReceiptOption}
        onChange={(event) => handleOptionChange(event, setCheckedReceiptOption)}
      />
      {checkedReceiptOption === "cashReceipt" && (
        <input
          type="text"
          id="cashReceiptInput"
          placeholder="(-없이) 숫자만 입력해주세요."
          onChange={inputReceiptNumber}
        />
      )}
      <CheckBox
        className="conditionCheckBox"
        options={conditionOptions}
        all={allCondition}
        isAllChecked={isAllChecked}
        onAllChange={setIsAllChecked}
      />
      <button onClick={handlePay} className="payBtn">
        425,900원 결제하기
      </button>
      <div className="toggle-text">
        <p>Toggle Btn</p>
        <Toggle onChange={handleToggle} value="toggleBtn" />
      </div>
    </div>
  );
}

export default Mainpage;
