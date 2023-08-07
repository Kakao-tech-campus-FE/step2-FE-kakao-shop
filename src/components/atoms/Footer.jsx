const Footer = () => {
  return (
    <footer>
      <div className={"footer-dummy mt-10 h-[192px]"}></div>
      <div className="footer text-muted absolute bottom-0 flex w-full flex-col gap-4 bg-kakao-dark-gray py-8 pl-6 text-left text-xs text-white">
        (주)카카오대표이사 : 홍은택 주소 : 제주특별자치도 제주시 첨단로 242
        <br />
        사업자등록번호 : 120-81-47521 통신판매업신고 : 제2015 - 제주아라 -
        0032호 호스팅 사업자 : (주)카카오
        <br />
        이메일 : cs.shopping@kakaocorp.com 고객센터 : 1544-5664 (통화료 발생 /
        평일 09:00~18:00) 톡 상담하기 (평일 09:00~18:00)
        <div>Copyright © Kakao Corp. All rights reserved</div>
        (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
        포함되어 있습니다.
        <br />
        개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서
        통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와
        책임은 각 판매자에게 있습니다.
        <br />
      </div>
    </footer>
  );
};

export default Footer;
