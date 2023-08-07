import ImageLink from "components/molecules/ImageLink.js";
import LogInForm from "components/organisms/LogInForm.js";

import logoKakaoText from "assets/icon/logoKakaoText.png";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function LogInSection() {
  return (
    <div className="inline-block w-[600px]">
      <ImageLink
        LinkClassName="block my-12 mx-auto"
        ImageClassName="h-12"
        to={staticServerUri + "/"}
        src={logoKakaoText}
        alt="logoKakaoText"
      />
      <LogInForm />
      <div className="my-12 space-y-2 text-xs">
        <p className="flex justify-center space-x-4">
          <span> 이용약관</span>
          <span className="font-bold">개인정보 처리방침</span>
          <span>운영정책</span>
          <span>고객센터</span>
          <span>공지사항</span>
          <span>한국어</span>
        </p>
        <p className="text-gray-500">
          Copyright <span className="font-bold">JsH</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
