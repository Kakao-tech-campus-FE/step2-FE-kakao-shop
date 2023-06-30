import styled from '@emotion/styled';
import { InputHTMLAttributes, PropsWithChildren } from 'react';

type Props = {
  name: string;
} & PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>;

const Radio = ({ id, name, children, checked, ...props }: Props) => {
  return (
    <FlexContainer>
      <StyledContainerLabel htmlFor={id}>
        <StyledInput type="radio" id={id} name={name} {...props} checked={checked} />
        {children}
      </StyledContainerLabel>
    </FlexContainer>
  );
};

Radio.Regular = function ({ id, name, children, checked, ...props }: Props) {
  return (
    <Radio id={id} name={name} checked={checked} {...props}>
      {checked ? <StyledCheckRadio></StyledCheckRadio> : <StyledRadio></StyledRadio>}
      <StyledLabel>{children}</StyledLabel>
    </Radio>
  );
};

Radio.Big = function ({ id, name, children, checked, ...props }: Props) {
  return (
    <Radio id={id} name={name} checked={checked} {...props}>
      {checked ? <StyledCheckBigBlackRadio></StyledCheckBigBlackRadio> : <StyledBigBlackRadio></StyledBigBlackRadio>}
      <StyledLabel>{children}</StyledLabel>
    </Radio>
  );
};

Radio.Info = function ({ children }: PropsWithChildren) {
  return (
    <InfoRoot>
      <InfoPromotion>{children}</InfoPromotion>
    </InfoRoot>
  );
};

export default Radio;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledContainerLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const StyledInput = styled.input`
  cursor: pointer;
  display: none;
`;

const StyledCheckRadio = styled.span`
  width: 26px;
  height: 26px;
  display: inline-block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/ico_shoporder_230607.5abf9bcf37cc40a9.png')
    no-repeat;
  background-size: 150px 225px;
  background-position: -50px -100px;

  vertical-align: top;
`;

const StyledRadio = styled.span`
  width: 26px;
  height: 26px;
  display: inline-block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/ico_shoporder_230607.5abf9bcf37cc40a9.png')
    no-repeat;
  background-size: 150px 225px;
  background-position: -20px -100px;

  vertical-align: top;
`;

const StyledCheckBigBlackRadio = styled.span`
  width: 26px;
  height: 26px;
  display: inline-block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/pay_icon_200401.4e2af07d62fbb994.png')
    no-repeat;
  background-size: 210px 50px;
  background-position: -90px 0;

  vertical-align: top;
`;

const StyledBigBlackRadio = styled.span`
  width: 26px;
  height: 26px;
  display: inline-block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  color: transparent;
  background: url('https://st.kakaocdn.net/commerce_ui/front-sp/real/20230629/093545/pay_icon_200401.4e2af07d62fbb994.png')
    no-repeat;
  background-size: 210px 50px;
  background-position: -60px 0;

  vertical-align: top;
`;

const StyledLabel = styled.span`
  cursor: pointer;
  display: inline-block;
  padding-left: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  letter-spacing: -0.036em;
  vertical-align: top;
`;

const InfoRoot = styled.div`
  padding: 3px 0 0 38px;
`;

const InfoPromotion = styled.div`
  height: 26px;
  width: fit-content;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 400;
  color: #343218;
  background-color: #fff68c;
  vertical-align: middle;
  line-height: 29px;
  letter-spacing: -1px;
  border-radius: 14px;
`;
