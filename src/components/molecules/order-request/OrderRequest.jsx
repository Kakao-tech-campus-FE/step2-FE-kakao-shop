import styled from "styled-components";
import { useRef } from "react";

const Styled = {
  RequestInfo: styled.div`
    width: 100%;
    padding-top: 0.75rem;
  `,
  Select: styled.select`
    padding: 0.5rem;
    width: 100%;
    color: #222222;
    border: ${({ theme }) => theme.border.default};
    border-radius: 0.25rem;
    appearance: none;

    &:required:invalid {
      color: gray;
    }
  `,
  Option: styled.option``,
  Textarea: styled.textarea`
    margin-top: 1rem;
    padding: 0.75rem;
    width: 100%;
    height: 75px;

    color: #000;
    border: ${({ theme }) => theme.border.default};
    border-radius: 0.25rem;

    resize: none;
    appearance: none;
  `,
};

const OPTIONS_INFO = [
  {
    value: "placeholder",
    text: "배송 요청사항을 입력하세요.",
    disabled: true,
    selected: "selected",
  },
  { value: "배송 전 연락 바랍니다. ", text: "배송 전 연락 바랍니다." },
  {
    value: "부재시 경비실에 맡겨주세요. ",
    text: "부재시 경비실에 맡겨주세요.",
  },
  { value: "부재시 연락 주세요. ", text: "부재시 연락 주세요." },
  { value: "", text: "직접 입력" },
];

function OrderRequest() {
  const selectRef = useRef(0);
  const messageRef = useRef();

  const handleSelectChange = (e) => {
    if (e.target.value === "placeholder") return;
    messageRef.current.value = OPTIONS_INFO[e.target.value]["value"];
  };

  return (
    <Styled.RequestInfo>
      <Styled.Select ref={selectRef} onChange={handleSelectChange}>
        {OPTIONS_INFO.map((item, index) => (
          <Styled.Option
            key={index}
            value={index}
            disabled={item?.disabled}
            selected={item?.selected}
          >
            {item.text}
          </Styled.Option>
        ))}
      </Styled.Select>
      <Styled.Textarea ref={messageRef} />
    </Styled.RequestInfo>
  );
}

export default OrderRequest;
