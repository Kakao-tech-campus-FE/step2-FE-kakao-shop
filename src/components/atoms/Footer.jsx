import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border border-x-0 py-10">
      <div className="w-[840px] m-auto">
        <Link to={"/"} className="inline-block">
          <img
            className="w-36 h-5"
            src="https://st.kakaocdn.net/commerce_ui/front-sp/real/20230721/104852/assets/images/order/pc/pc_foot_logo.png"
            alt="카카오톡 쇼핑하기 홈으로"
          />
        </Link>
        <div className="footer-info">
          <div className="info-txt text-sm text-neutral-500">
            <p>
              (주)카카오대표이사 : 홍은택 주소 : 제주특별자치도 제주시 첨단로
              242
            </p>
            <p>
              사업자등록번호 : 120-81-47521 통신판매업신고 : 제2015 - 제주아라 -
              0032호 호스팅 사업자 : (주)카카오
            </p>
            <p>
              이메일 : cs.shopping@kakaocorp.com 고객센터 : 1544-5664 (통화료
              발생 / 평일 09:00~18:00) 톡상담하기 (평일 09:00~18:00)
            </p>
            <div className="kakao-corp py-2">
              <p>Copyright © Kakao Corp. All rights reserved</p>
            </div>

            <div className="kakao-info">
              <p>
                (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
                포함되어 있습니다.
              </p>
              <p>
                개별판매자가 판매하는 상품에 대해 (주)카카오는
                통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문,
                배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
