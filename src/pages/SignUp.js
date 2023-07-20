import ImageLink from "components/molecules/ImageLink.js";
import SignUpForm from "components/organisms/SignUpForm.js";

import logoKakaoText from "assets/icon/logoKakaoText.png";

export default function SignUp() {
  return (
    <>
      <ImageLink to="/" src={logoKakaoText} alt="logoKakaoText" />
      <SignUpForm />
    </>
  );
}
