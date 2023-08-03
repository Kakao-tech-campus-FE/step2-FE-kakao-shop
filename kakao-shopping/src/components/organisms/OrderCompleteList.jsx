import OrderCompleteListItem from "../molecules/OrderCompleteListItem";

const OrderCompleteList = ({ products }) => {
 return (
  products.map((item) => {
    return (
      <OrderCompleteListItem item={item} key={item.productName} />
    )
  })
 )
};

export default OrderCompleteList;