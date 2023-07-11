import React, { useState } from "react";
import { RadioButton, RadioLabel, Policy } from "./style";

export default function Radio() {
  const [cashOption, setCashOption] = useState(true);

  const handleOption = (e) => {
    setCashOption(e.target.value === "apply");
  };
  return (
    <div
      style={{
        width: "800px",
        marginLeft: "10px",
        padding: "10px",
        border: "1px solid lightgray",
      }}
    >
      <RadioLabel>
        <RadioButton
          type="radio"
          name="cash"
          id="apply"
          value="apply"
          checked={cashOption}
          onChange={handleOption}
        />
        현금영수증 발급신청
      </RadioLabel>
      <RadioLabel>
        <RadioButton
          type="radio"
          name="cash"
          id="notApply"
          value="notApply"
          checked={!cashOption}
          onChange={handleOption}
        />
        발급안함
      </RadioLabel>
      {cashOption && (
        <>
          <div
            style={{
              marginTop: "10px",
              padding: "15px",
              backgroundColor: "rgb(242,242,242)",
            }}
          >
            <span style={{ fontWeight: "700" }}>개인소득공제(휴대폰)</span>{" "}
            01062013110
          </div>
          <Policy>
            조세특례제한법 시행령 제121조의 2에 해당하는 상품유형 (일부
            이용권)은 현금영수증 발행대상에서 제외됩니다.
          </Policy>
          <Policy>
            현금영수증은 현금성 결제(카카오페이머니, 무통장입금,
            쇼핑포인트(유상))에 한해 입력된 정보로 발행됩니다.
          </Policy>
        </>
      )}
    </div>
  );
}
