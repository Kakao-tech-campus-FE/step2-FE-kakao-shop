import styled from '@emotion/styled';

const Title = () => {
  return (
    <S.Root>
      <S.H1>
        <S.IR>회원가입</S.IR>
      </S.H1>
    </S.Root>
  );
};

export default Title;

const S = {
  Root: styled.div`
    padding-top: 50px;
  `,
  H1: styled.h1`
    display: block;

    width: 88px;
    height: 27px;

    margin: 0 auto;

    background: #fff url('https://accounts.kakaocdn.net/images/pc/logo_kakao.png') no-repeat 0 0;
    background-size: 100px 80px;

    font-size: 19px;
    line-height: 27px;
    text-align: center;
  `,
  IR: styled.span`
    position: relative;
    z-index: -1;

    overflow: hidden;

    width: 100%;
    height: 100%;
  `,
};
