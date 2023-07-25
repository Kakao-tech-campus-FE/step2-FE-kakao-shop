const Footer = () => {
  return (
    <div className="container border-t border-gray-300 flex gap-4 pt-2">
      <div className="kakao-txt-logo min-w-fit text-xl font-normal">
        카카오
        <span className="kakao-txt-logo-highlight font-bold">톡 쇼핑하기</span>
      </div>
      <div className="kakao-txt-info min-w-fit text-xs text-gray-400">
        <p className="kakao-info ">
          <span className="txt-info ">(주)카카오</span>
          <span className="txt-info">대표이사 : 홍은택</span>
          <span className="txt-info">
            주소 : 제주특별자치도 제주시 첨단로 242
          </span>
        </p>
        <p className="kakao-info">
          <span className="txt-info">사업자등록번호 : 120-81-47521</span>
          <span className="txt-info">
            통신판매업신고 : 제2015 - 제주아라 - 0032호
          </span>{" "}
          <span className="txt-info">호스팅 사업자 : (주)카카오</span>
        </p>
        <p className="kakao-info">
          <span className="txt-info">
            이메일 : <span>cs.shopping@kakaocorp.com</span>
          </span>{" "}
          <span className="txt-info">
            고객센터 : 1544-5664 (통화료 발생 / 평일 09:00~18:00){" "}
            <span className="txt-info">톡 상담하기</span> (평일 09:00~18:00)
          </span>
        </p>
        <p className="txt-copyright">
          <span> Copyright © Kakao Corp. All rights reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
