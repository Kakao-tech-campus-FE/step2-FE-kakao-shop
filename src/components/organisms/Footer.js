import ImageLink from "components/molecules/ImageLink.js";

import logoKakao from "assets/images/icon/logoKakao.png";

export default function Footer() {
  return (
    <footer>
      <ImageLink to="/" src={logoKakao} alt="logoKakao" />
      <p>
        개별판매자가 판매하는 상품에 대해 본 사업자는 통신중개판매업자로서
        통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와
        책임은 각 판매자에게 있습니다.
      </p>
    </footer>
  );
}
