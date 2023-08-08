import React from "react";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-8 max-w-screen-lg">
      <div className="wrapper-footer relative flex gap-8 ">
        <div className="footer-logo">
          <img
            src={staticServerUri + "/logoKakao_footer.png"}
            alt="카카오톡 쇼핑하기"
            width={144}
          />
        </div>
        <div className="page-info text-xs text-gray-600 flex flex-col gap-4">
          <div className="contact-info">
            <p className="flex gap-2">
              <span>(주)카카오</span>
              <span>대표이사 : 홍은택</span>
              <span>주소 : 제주특별자치도 제주시 첨단로 242</span>
            </p>
            <p className="flex gap-2">
              <span>사업자등록번호 : 120-81-47521</span>
              <span>통신판매업신고 : 제2015 - 제주아라 - 0032호</span>
              <span>호스팅 사업자 : (주)카카오</span>
            </p>
            <p className="flex gap-2">
              <span>이메일 : cs.shopping@kakaocorp.com</span>
              <span>고객센터 : 1544-5664 (통화료 발생 / 평일 09:00~18:00)</span>
            </p>
          </div>
          <div className="copyright">
            <p>
              <span>Copyright ©️ Kakao Corp. All rights reserved</span>
            </p>
          </div>
          <div className="agreement">
            <p>
              <div>
                (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는
                상품이 포함되어 있습니다.
              </div>
              <div>
                개별판매자가 판매하는 상품에 대해 (주)카카오는
                통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문,
                배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
              </div>
            </p>
          </div>
          <div className="mark-info flex gap-4">
            <img
              src={staticServerUri + "/familymark_pc.png"}
              alt="가족친화 우수기업"
              width={128}
            />
            <img
              src={staticServerUri + "/img_isolation.png"}
              alt="위해상품차단시스템 운영매장"
              width={128}
            />
          </div>
        </div>
        <div className="link-group absolute text-xs top-0 right-0">
          <ul className="flex gap-2">
            <li>
              <a href="https://ccs.kakao.com/web/help?service=149">고객센터</a>
            </li>
            <li>
              <a href="https://buy.kakao.com/shopping-front/user/term-detail/PAY?channel=STORE">
                이용약관
              </a>
            </li>
            <li>
              <a
                className="font-bold"
                href="https://www.kakao.com/policy/privacy?lang=ko"
              >
                개인정보처리방침
              </a>
            </li>
            <li>
              <a href="https://cipr.kakao.com/guide">지식재산권보호센터</a>
            </li>
            <li>
              <a href="https://cipr.kakao.com/guide">안전거래센터</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
