import { comma } from '../../utils/convert';
import * as Order from '../../styles/molecules/OrderList';

const OrderList = ({ products }) => {
  return (
    <Order.Container>
      {products.map((item) =>
        item.carts.some((cart) => cart.quantity) ? (
          <Order.OneProductContainer key={item.id}>
            <Order.ProductName>{item.productName}</Order.ProductName>
            <Order.OptionContainer>
              {item.carts.map((cart) =>
                cart.quantity ? (
                  <Order.Option key={cart.id}>
                    <span className="product-option-name">
                      {cart.option.optionName}
                    </span>
                    <Order.OptionQuantityPrice className="price">
                      <span>{cart.quantity}개</span>
                      <span>{comma(cart.price)}원</span>
                    </Order.OptionQuantityPrice>
                  </Order.Option>
                ) : null
              )}
            </Order.OptionContainer>
          </Order.OneProductContainer>
        ) : null
      )}
    </Order.Container>
  );
};

export default OrderList;
