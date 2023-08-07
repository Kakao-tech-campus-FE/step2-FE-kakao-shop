const Footer = () => {
  return (
    <footer className="flex place-content-center border-t-2 pt-4 w-[100%] gap-10 ">
      <div className="items-center justify-center w-[150px] mt-10">
        <span className="font-bold text-lg">카카오톡 쇼핑하기</span>
      </div>
      <div className="flex flex-col items-center justify-center w-[500px]">
        <span className="text-sm font-thin text-slate-400">
          (주)카카오대표이사 : 홍은택 주소 : 제주특별자치도 제주시 첨단로 242
        </span>
        <span className="text-sm font-thin text-slate-400">
          사업자등록번호 : 120-81-4752 1 통신판매업신고 : 제2015 - 제주아라 -
          0032호 호스팅 사업자 : (주)카카오
        </span>
        <span className="text-sm font-thin text-slate-400">
          이메일 : cs.shopping@kakaocorp.com 고객센터 : 1544-5664 (통화료 발생 /
          평일 09:00~18:00) 톡상담하기 (평일 09:00~18:00)
        </span>
        <span className="text-sm font-thin text-slate-400">
          Copyright © Kakao Corp. All rights reserved
        </span>
        <span className="text-sm font-thin text-slate-400">
          (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
          포함되어 있습니다.
        </span>
        <span className="text-sm font-thin text-slate-400">
          개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서
          통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한
          의무와 책임은 각 판매자에게 있습니다.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
