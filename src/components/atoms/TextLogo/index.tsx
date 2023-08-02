import logo from "@assets/images/logoKakaoText.png";
import { styled } from "styled-components";

interface Props {
  // style을 받는 prop
  width?: string;
  height?: string;
  padding?: string;
}

const TextLogo = ({ width, height, padding }: Props) => {
  return (
    <ImageWrapper width={width} height={height} padding={padding}>
      <img src={logo} alt="kakao-logo" />
    </ImageWrapper>
  );
};

export default TextLogo;

const ImageWrapper = styled.div<Props>`
  padding: ${({ padding }) => padding || "0"};

  img {
    display: block;
    width: ${({ width }) => width || "110px"};
    height: ${({ height }) => height || "40px"};
    margin: 0 auto;
  }
`;
