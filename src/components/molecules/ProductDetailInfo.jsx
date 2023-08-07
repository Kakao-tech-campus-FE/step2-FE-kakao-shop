import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';
import * as Product from '../../styles/molecules/ProductDetailInfo';
import Star from '../atoms/Star';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const ProductDetailInfo = ({ product }) => {
  return (
    <Product.ProductInfoContainer>
      <Photo
        className="productItem"
        src={staticServerUrl + product.response.image}
        alt="개별 상품 이미지"
      />
      <Product.TextContainer>
        <Star count={product.response.starCount} color="#1478FF" />
        <Product.ProductTitle>
          {product.response.productName}
        </Product.ProductTitle>
        <Product.ProductPrice>
          톡딜가 {comma(product.response.price)}원 ~
        </Product.ProductPrice>
      </Product.TextContainer>
    </Product.ProductInfoContainer>
  );
};

export default ProductDetailInfo;
