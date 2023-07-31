import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import Container from "../atoms/Container";
import Box from "../atoms/Box";

const ProductInformationColumn = ({ product }) => {
  return (
    <Container>
      <Box className="product-box">
        <div className="grid grid-cols-2 gap-4">
          {" "}
          {/* Tailwind CSS Grid를 사용하여 2열로 나눕니다 */}
          <div className="flex items-center">
            <Photo
              className="photo mt-10"
              src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${product.image}`}
              alt={product.productName}
              style={{ height: "100%" }} // 이미지의 높이를 컨테이너의 높이에 맞추도록 설정
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold">{product.productName}</h1>
            <p className="text-lg w-28 text-center rounded-xl p-1.5 mt-10  bg-black text-white">
              {comma(product.price)}원
            </p>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default ProductInformationColumn;
