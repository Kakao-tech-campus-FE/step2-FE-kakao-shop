import { Link } from "react-router-dom";
import { thisYear } from "../../utils/formatYear";

const staticServerUri = process.env.REACT_APP_PATH || "";

function Footer() {
  return (
    <footer className="mt-4 bg-slate-100">
      <nav className="max-w-screen-lg h-full flex text-center justify-center m-auto py-8">
        <ul className="w-96 font-extrabold text-xl">
          <Link to={staticServerUri + "/"}>카카오톡 쇼핑하기</Link>
        </ul>
        <div className="text-left pr-4">
          <div className="text-sm pb-2">
            <span>
              Copyright &copy; <span>{thisYear()}</span>
            </span>
          </div>
          <div className="text-xs">
            <span>
              (주)카카오에서 판매하는 상품 중에는 개별판매자가 판매하는 상품이
              포함되어 있습니다.
            </span>
            <br />
            <span>
              개별판매자가 판매하는 상품에 대해 (주)카카오는
              통신중개판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
              및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
            </span>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
