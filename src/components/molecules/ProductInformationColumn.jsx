import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import Container from "../atoms/Container";
import Box from "../atoms/Box";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductInformationColumn = ({ product }) => {
  return (
    <>
      <div className="product-box">
        <div className="grid grid-cols-2 gap-4">
          <Photo
            className="photo max-w-[430px] max-h-[430px]"
            src={`${staticServerUri}${product.image}`}
            alt={product.productName}
            // 이미지의 높이를 컨테이너의 높이에 맞추도록 설정
          />
          <div className="flex flex-col mt-6">
            {/* icon으로 수정하기  */}
            <span className="flex">
              <p className="text-2xl text-blue-500">★★★★</p>
              <a
                href="#"
                className="text-blue-500 m-2 underline hover:text-blue-700"
              >
                리뷰 5,767건
              </a>
            </span>
            <h1 className="text-2xl mt-1 ">{product.productName}</h1>
            <span className="flex">
              <p className="text-xl w-28 text-center rounded-full p-2 mt-10 bg-black text-white">
                {comma(product.price)}원
              </p>
              <p className="text-xl w-50 text-center rounded-full mx-1 p-2 mt-10 bg-yellow-300">
                톡딜가 22,000원~
              </p>
            </span>
            <div
              className="information border  mt-4 p-4"
              style={{ lineHeight: "1.6" }}
            >
              <h1 className="text-lg font-bold">톡딜 안내</h1>
              <p>
                2023.07.31 17:00 ~ 2023.08.03 23:59까지
                <br />- 만원이상 톡딜 구매시 1,000P Gift Card 발급
                <br />- 톡딜 상품 구매 시 최대 4% 쇼핑포인트 적립
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInformationColumn;
