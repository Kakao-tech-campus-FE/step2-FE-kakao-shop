import { comma } from "../../utils/convert";
import * as Order from '../../styles/molecules/OrderList';

const OrderList = ({products}) => {
    return(
        <Order.Container>
            {products.map((item) => (
                <Order.OneProductContainer key={item.id}>
                    <Order.ProductName>{item.productName}</Order.ProductName>
                    <Order.OptionContainer>
                        {item.carts.map((cart) => (
                            <Order.Option key={cart.id}>
                                <span className="product-option-name">
                                    {cart.option.optionName}
                                </span>
                                <Order.OptionQuantityPrice className="price">
                                    <span>{cart.quantity}개</span>
                                    <span>{comma(cart.price)}원</span>
                                </Order.OptionQuantityPrice>
                             </Order.Option>
                        ))}
                    </Order.OptionContainer>
                </Order.OneProductContainer>
            ))}
        </Order.Container> 
    );
};

export default OrderList;