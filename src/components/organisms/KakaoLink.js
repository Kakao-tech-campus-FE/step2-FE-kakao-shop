// components
import ImageLink from "../molecules/ImageLink.js";

// images
import logoKakaoText from "../../assets/images/icon/logoKakaoText.png";

export default function KakaoLink() {
  return (
    <ImageLink to="/" src={logoKakaoText} alt="logoKakaoText"/>
  );
}
