import { comma } from '../../utils/convert';
import Card from '../atoms/Card';
import Photo from '../atoms/Photo';
import * as Product from '../../styles/molecules/ProductCard';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const ProductCard = ({ product }) => {
  return (
    <Card to={`/product/${product.id}`}>
      <Photo
        src={staticServerUrl + product.image}
        alt={product.productName}
        className="card"
      />
      <Product.Delivery>무료배송</Product.Delivery>
      <div>
        <Product.Title>{product.productName}</Product.Title>
        <Product.PriceTextContainer>
          <Product.TalkPriceText>톡딜가</Product.TalkPriceText>
          <Product.PriceText>{comma(product.price)}원 부터~</Product.PriceText>
        </Product.PriceTextContainer>
      </div>
    </Card>
  );
};

export default ProductCard;
