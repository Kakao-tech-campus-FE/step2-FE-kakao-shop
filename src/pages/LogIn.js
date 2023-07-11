import ImageLink from "../components/molecules/ImageLink.js";
import LogInForm from "../components/organisms/LogInForm.js";

import logoKakaoText from "../assets/images/icon/logoKakaoText.png";

export default function LogIn() {
  return (
    <>
      <ImageLink to="/" src={logoKakaoText} alt="logoKakaoText" />
      <LogInForm />
    </>
  );
}
