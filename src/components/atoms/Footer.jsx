import styled from "styled-components";

const StyledBox =
  // 아래의 style이 입혀진 button 태그를 생성
  styled.div`
    width: 580px;
    height: 100%;
    margin: 100px auto 100px;
    padding: 0 69px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 12px;
    box-sizing: border-box;
    word-wrap: break-word;
  `;

function Footer() {
  return (
    <>
      <StyledBox>FOOTER</StyledBox>
    </>
  );
}
export default Footer;
