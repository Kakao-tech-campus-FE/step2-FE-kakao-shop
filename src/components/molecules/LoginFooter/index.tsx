import TextLink from "@components/atoms/TextLink";
import { styled } from "styled-components";

const LoginFooter = () => {
  return (
    <Wrapper>
      <LinkWrapper>
        <TextLink to={"/login"} children={"이용약관"} />
        <strong>
          <TextLink to={"/login"} children={"개인정보 처리방침"} />
        </strong>
        <TextLink to={"/login"} children={"운영정책"} />
        <TextLink to={"/login"} children={"고객센터"} />
        <TextLink to={"/login"} children={"공지사항"} />
        <TextLink to={"/login"} children={"한국어"} />
      </LinkWrapper>
      <p>
        Copyright ©<strong>Kakao Corp.</strong> All rights reserved.
      </p>
    </Wrapper>
  );
};

export default LoginFooter;

const Wrapper = styled.footer`
  padding-bottom: 50px;
  text-align: center;
  white-space: nowrap;

  p {
    margin-top: 6px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 11px;
    line-height: 18px;
  }

  strong {
    font-weight: 700;
    cursor: pointer;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;
