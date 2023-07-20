import "../../styles/atoms/Footer.css";

/**
 * Footer Component: 코드펜에서 가져온 코드
 * @returns Footer
 */
export default function Footer() {
  return (
    <div className="ng-star-inserted">
      <div id="kakaoFoot" className="pc_footer">
        <div className="inner_foot">
          <h3 className="tit_logo">
            <a href="/" routerlink="/">
              <img
                width="144"
                height="20"
                alt="카카오톡 쇼핑하기"
                className="img_g"
                src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230713/161505/assets/images/pc/pc_foot_logo.png"
              />
            </a>
          </h3>
          <div className="corp_info">
            <p className="kakao_info">
              <span className="txt_info">(주)카카오</span>
              <span className="txt_info">대표이사 : 홍은택</span>
              <span className="txt_info">
                주소 : 제주특별자치도 제주시 첨단로 242
              </span>
            </p>
            <p className="kakao_info">
              <span className="txt_info">사업자등록번호 : 120-81-47521</span>
              <span className="txt_info">
                통신판매업신고 : 제2015 - 제주아라 - 0032호
              </span>
              <span className="txt_info">호스팅 사업자 : (주)카카오</span>
            </p>
            <p className="kakao_info">
              <span className="txt_info">
                이메일 : <span>cs.shopping@kakaocorp.com</span>
              </span>
              <span className="txt_info">
                고객센터 : 1544-5664 (통화료 발생 / 평일 09:00~18:00){" "}
                <a
                  className="link_info"
                  href="https://bizmessage.kakao.com/chat/open/@카카오커머스고객센터?bot=true&amp;event=hello_store"
                >
                  톡 상담하기
                </a>{" "}
                (평일 09:00~18:00)
              </span>
            </p>
            <small className="txt_copyright">
              <span> Copyright © Kakao Corp. All rights reserved</span>
            </small>
            <p className="kakao_info">
              {" "}
              (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
              포함되어 있습니다.
              <br />
              개별판매자가 판매하는 상품에 대해 (주)카카오는
              통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
              및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.{" "}
            </p>
            <span className="mark_info">
              <img
                width="138"
                height="40"
                alt="가족 친화 우수기업"
                className="img_familymark"
                src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230713/161505/assets/images/pc/familymark_pc.png"
              />
              <img
                width="111"
                height="31"
                alt="위해상품차단 시스템 운영매장"
                className="img_isolation"
                src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230713/161505/assets/images/pc/img_isolation.png"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
