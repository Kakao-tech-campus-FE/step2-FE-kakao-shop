import OptionItem from '../atoms/OptionItem';
import * as S from '../../styles/molecules/ProductItems';

const ProductItems = ({ products, id }) => {
  return (
    <>
      <S.OrderNumber>
        <span className="title">주문번호</span>
        <span>{id}</span>
      </S.OrderNumber>
      {products.map((product, idx) =>
        product.items.some((item) => item.quantity) ? (
          <S.Container className="product" key={idx}>
            <S.ProductTitleContainer>
              <span className="title">상품명</span>
              <span className="product">{product.productName}</span>
            </S.ProductTitleContainer>
            <OptionItem key={idx} items={product.items} idx={idx} />
          </S.Container>
        ) : null
      )}
    </>
  );
};

export default ProductItems;
