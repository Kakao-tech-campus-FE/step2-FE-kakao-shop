import Container from "../atoms/Container";
import Logo from "../atoms/Logo";
import Box from "../atoms/Box";

/** 푸터
 *
 * @param {string} className - 커스텀 클래스
 * @returns {JSX.Element}
 */
const FooterForm = ({ className = "bg-white" }) => {
  return (
    <div
      className={`flex max-w-none min-w-[1280px] h-[210px] mx-auto left-0 right-0 top-0 border-t border-gray-200 ${className}`}
    >
      <Container className="flex max-w-none w-[1280px] h-[210px] pt-[40px] mx-auto left-0 right-0 top-0">
        <Logo
          imgSrc="https://st.kakaocdn.net/commerce_ui/front-sp/real/20230721/104852/assets/images/order/pc/pc_foot_logo.png"
          imgClassName="block w-[144px] h-[20px]"
        />
        <Box className="info-box block pl-[30px] text-gray-400 text-[12px] font-semibold">
          <span className="block">
            (주)카카오 대표이사 : 홍은택 주소 : 제주특별자치도 제주시 첨단로 242
          </span>
          <span className="block">
            사업자등록번호 : 120-81-47521 통신판매업신고 : 제2015 - 제주아라 -
            0032호 호스팅 사업자 : (주)카카오
          </span>
          <span className="block">
            이메일 : cs.shopping@kakaocorp.com 고객센터 : 1544-5664 (통화료 발생
            / 평일 09:00~18:00) 톡상담하기 (평일 09:00~18:00)
          </span>
          <span className="block pt-[6px] pb-[8px]">
            Copyright © Kakao Corp. All rights reserved
          </span>
          <span className="block">
            (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
            포함되어 있습니다.
          </span>
          <span className="block">
            개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서
            통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한
            의무와 책임은 각 판매자에게 있습니다.
          </span>
        </Box>
      </Container>
    </div>
  );
};

export default FooterForm;
