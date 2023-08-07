import OrderTemplate from "../components/templates/OrderTemplate";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../components/services/cart";

const OrderPage = () => {
  
  const {data} = useQuery(["cart"], getCart, {suspense:true});

  return(
      <OrderTemplate data ={data}/>
  );
}

export default OrderPage;