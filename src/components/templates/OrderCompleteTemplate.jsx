import { useNavigate } from 'react-router-dom';
import { comma } from '../../utils/convert';
import ProductItems from '../molecules/ProductItems';
import * as OrderComplete from '../../styles/templates/OrderCompleteTemplate';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const OrderCompleteTemplate = ({ data, id }) => {
  const navigate = useNavigate();

  return (
    <OrderComplete.Container>
      <OrderComplete.HeadContainer className="complete-message">
        <OrderComplete.Head>구매완료!</OrderComplete.Head>
        <OrderComplete.HeadText>
          구매가 정상적으로 완료되었습니다.
        </OrderComplete.HeadText>
      </OrderComplete.HeadContainer>
      <div className="detail-box">
        <OrderComplete.ProductsInfo>주문상품 정보</OrderComplete.ProductsInfo>
        <div className="product-list">
          <ProductItems products={data.response.products} id={id} />
        </div>
      </div>
      <div>
        <OrderComplete.Payment>
          <span className="payment">일반 결제 금액</span>
          <span className="price">{comma(data.response.totalPrice)}</span>
        </OrderComplete.Payment>
        <OrderComplete.Button
          onClick={() => {
            //주문 완료 후 메인 페이지로 이동
            navigate(staticServerUrl + '/');
          }}
        >
          쇼핑 계속하기
        </OrderComplete.Button>
      </div>
    </OrderComplete.Container>
  );
};

export default OrderCompleteTemplate;
