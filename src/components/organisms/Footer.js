import ImageLink from "components/molecules/ImageLink.js";

import logoKakao from "assets/icon/logoKakao.png";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-28 bg-gray-50 border flex items-center justify-center space-x-4">
      <ImageLink ImageClassName="h-8" to={staticServerUri + "/"} src={logoKakao} alt="logoKakao" />
      <p className="text-sm text-gray-500">
        개별판매자가 판매하는 상품에 대해 본 사업자는 통신중개판매업자로서
        통신판매의 당사자가 아니며
        <br /> 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게
        있습니다.
      </p>
    </footer>
  );
}
