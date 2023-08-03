const Footer = () => {

    return(
        <div className="footer w-full bg-zinc-50 my-6 ">
            <div className="max-w-[1280px] py-10 m-auto  flex">
                <div>
                    <a href="/">
                        <img src="/pc_foot_logo.png" alt="카카오톡 쇼핑하기" width="144" height="20"/>
                    </a>
                </div>
                <div className="pl-8">
                    <p>
                        <span className="text-xs text-#a6a6a6">(주)카카오</span>
                        <span className="text-xs text-#a6a6a6 px-1">대표이사 : 홍은택</span>
                        <span className="text-xs text-#a6a6a6 px-1">주소 : 제주특별자치도 제주시 첨단로 242</span>
                    </p>
                    <p>
                        <span className="text-xs text-#a6a6a6 ">사업자등록번호 : 120-81-47521</span>
                        <span className="text-xs text-#a6a6a6 px-1">통신판매업신고 : 제2015 - 제주아라 - 0032호</span>
                        <span className="text-xs text-#a6a6a6 px-1">호스팅 사업자 : (주)카카오</span>
                    </p>
                    <p>
                        <span className="text-xs text-#a6a6a6">이메일 : cs.shopping@kakaocorp.com</span>
                        <span className="text-xs text-#a6a6a6 px-1">고객센터 : 1544-5664 (통화료 발생 / 평일 09:00~18:00)</span>
                    </p>
                    <p>
                        <span className="text-xs text-#a6a6a6"> Copyright © Kakao Corp. All rights reserved</span>
                    </p>
                    <p className="text-xs text-#a6a6a6 mt-2">
                        (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이 포함되어 있습니다.
                        <br />
                        개별판매자가 판매하는 상품에 대해 (주)카카오는 통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;