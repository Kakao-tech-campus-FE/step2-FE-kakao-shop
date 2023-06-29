import React, { ChangeEventHandler, PropsWithChildren } from "react";
import styled from "@emotion/styled";

const CheckBox = ({
  handleToggle,
  isChecked,
  children,
  ...Props
}: PropsWithChildren<CheckboxProps>) => {
  return (
    <CheckboxWrapper {...Props}>
      <input type="checkbox" onChange={handleToggle} checked={isChecked} />
      <CheckboxMark />
      {children}
    </CheckboxWrapper>
  );
};

CheckBox.RegularText = function ({ children }: PropsWithChildren) {
  return <CheckboxText>{children}</CheckboxText>;
};

CheckBox.BigText = function ({ children }: PropsWithChildren) {
  return <CheckboxBigText>{children}</CheckboxBigText>;
};

export default CheckBox;

type CheckboxProps = {
  handleToggle?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  isChecked?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const CheckboxWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  height: 22px;
  padding: 0 0;
  cursor: pointer;
  user-select: none; // 텍스트 드래그 방지

  & > input {
    // a11y hide
    position: absolute;
    display: inline-block;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;

const CheckboxMark = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 22px;
  height: 22px;
  display: inline-block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background: url("https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/ico_shoporder_230607.5abf9bcf37cc40a9.png")
    no-repeat;
  background-position: -75px -45px;
  background-size: 150px 225px;
  vertical-align: top;

  label input:checked ~ & {
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 22px;
    display: inline-block;
    overflow: hidden;
    font-size: 1px;
    line-height: 0;
    color: transparent;
    background: url("https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/ico_shoporder_230607.5abf9bcf37cc40a9.png")
      no-repeat;
    background-size: 150px 225px;
    vertical-align: top;
    background-position: -50px -70px;
  }
`;

const CheckboxText = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: #222;
  letter-spacing: -0.06em;
  padding-left: 28px;
`;

const CheckboxBigText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #222;
  letter-spacing: -0.06em;
  padding-left: 28px;
`;
