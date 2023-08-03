import styled from '@emotion/styled';
import { PropsWithChildren, ChangeEventHandler } from 'react';

type CheckboxProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  checked: boolean;
};

const CheckBox = ({ onChange, checked, children, ...props }: PropsWithChildren<CheckboxProps>) => {
  return (
    <CheckboxWrapper {...props}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <CheckboxMark />
      {children}
    </CheckboxWrapper>
  );
};

export default CheckBox;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  width: fit-content;
  height: 22px;

  padding: 0 0;

  cursor: pointer;
  user-select: none; // 텍스트 드래그 방지

  & > input {
    // a11y hide
    display: inline-block;
    overflow: hidden;

    position: absolute;

    width: 0.1rem;
    height: 0.1rem;

    margin: -0.1rem;
    padding: 0;

    border: 0;

    white-space: nowrap;
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;

const CheckboxMark = styled.span`
  display: inline-block;
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;

  width: 22px;
  height: 22px;

  background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/ico_shoporder_230607.5abf9bcf37cc40a9.png')
    no-repeat;
  background-size: 150px 225px;
  background-position: -50px -70px;

  color: transparent;
  font-size: 1px;
  line-height: 0;
  vertical-align: top;

  label input:checked ~ & {
    display: inline-block;
    overflow: hidden;

    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 22px;

    background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/ico_shoporder_230607.5abf9bcf37cc40a9.png')
      no-repeat;
    background-size: 150px 225px;
    background-position: -75px -45px;

    font-size: 1px;
    line-height: 0;
    color: transparent;
    vertical-align: top;
  }
`;
