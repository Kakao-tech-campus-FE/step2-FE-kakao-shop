import OrderOptionItem from "./OrderOptionItem";

const OrderItem = ({ item }) => {
    if(item.carts.every(option => option.quantity === 0)) {
        return;
    }

    return (
        <div className="border-b border-border_gray">
            {item.carts.map((option, index) => {
                return (
                    <OrderOptionItem 
                        key={`order-option-item-${index}`}
                        productName={item.productName} 
                        productId={item.id}
                        option={option}
                    />
                );
            })}
        </div>
    );
};

export default OrderItem;