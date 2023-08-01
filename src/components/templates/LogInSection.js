import ImageLink from "components/molecules/ImageLink.js";
import LogInForm from "components/organisms/LogInForm.js";

import logoKakaoText from "assets/icon/logoKakaoText.png";

export default function LogInSection() {
  return (
    <div className="inline-block w-[600px]">
      <ImageLink to="/" src={logoKakaoText} alt="logoKakaoText" />
      <LogInForm />
    </div>
  );
}
