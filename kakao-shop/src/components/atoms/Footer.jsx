import MainContainer from "./MainContainer";

/**
 * 전체 페이지에 공통으로 들어가는 footer
 */
const Footer = () => {
  return (
    <footer>
      <MainContainer className="">
        <p className="whitespace-pre-wrap py-10 text-xs text-gray-400">
          (통화료 발생 / 평일 09:00~18:00) 톡상담하기 (평일 09:00~18:00)
          <br />
          Copyright © kakao-tech-campus-SJH. All rights reserved
          <br />
          (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
          포함되어 있습니다.
          <br />
          개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서
          통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한
          의무와 책임은 각 판매자에게 있습니다.
        </p>
      </MainContainer>
    </footer>
  );
};

export default Footer;
