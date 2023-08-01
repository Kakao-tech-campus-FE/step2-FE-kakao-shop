import ImageLink from "components/molecules/ImageLink.js";
import SignUpForm from "components/organisms/SignUpForm.js";

import logoKakaoText from "assets/icon/logoKakaoText.png";

export default function SignUpSection() {
  return (
    <div className="inline-block w-[600px]">
      <ImageLink to="/" src={logoKakaoText} alt="logoKakaoText" />
      <SignUpForm />
    </div>
  );
}
