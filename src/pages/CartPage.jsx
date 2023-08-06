import { Suspense } from "react";
import { useQuery } from "react-query"
import Loader from "../component/atoms/Loader";
import CartList from "../component/molecules/CartList";
import {getCart} from "../services/addCart"
import GNB from "../component/atoms/GNB";
import { useState } from "react";
import { useEffect } from "react";

const CartPage=()=>{
  const { data, isLoading } = useQuery("cart", getCart);
    // const [carts, setCarts] = useState([]);


    // useEffect(() => {
    //     getCart()
    //       .then((res) => {
    //         console.log(res);
    //         setCarts(res);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);

      return (
        <div className="cartpage">
          <Suspense fallback={<Loader />}>
            {/* <CartList data={carts} /> */}
            <CartList data={data} isLoading={isLoading}/>
          </Suspense>
        </div>
      );
    };
export default CartPage;