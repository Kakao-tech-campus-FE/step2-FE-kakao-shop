const Footer = () => {
  return (
    <div className="border-t border-gray-200 bg-[#fafafa] py-4">
      <div className="m-auto flex max-w-[1280px] flex-col gap-4 p-3">
        {" "}
        <div className="flex gap-2 text-xs text-[#666]">
          <span>고객센터</span>
          <span>|</span>
          <span>이용약관</span>
          <span>|</span>
          <span>개인정보처리방침</span>
          <span>|</span>
          <span>지식재산권보호센터</span>
        </div>
        <p className="text-[11px] text-[#a6a6a6]">
          (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
          포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
          통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및
          환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </p>
        <div className="text-[11px] text-[#a6a6a6]">
          <p>
            (주)카카오대표이사 : 홍은택주소 : 제주특별자치도 제주시 첨단로 242
          </p>
          <p>
            사업자등록번호 : 120-81-47521통신판매업신고 : 제2015 - 제주아라 -
            0032호호스팅 사업자 : (주)카카오
          </p>
          <p>
            이메일 : cs.shopping@kakaocorp.com고객센터 : 1544-5664 (통화료 발생
            / 평일 09:00~18:00) 톡 상담하기 (평일 09:00~18:00)
          </p>
        </div>
        <p className="text-[11px] text-[#a6a6a6]">
          Copyright © Kakao Corp. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
