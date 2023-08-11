import { useNavigate } from "react-router-dom";
import { Suspense,useEffect,useState } from "react";
import { getCart } from "../services/addCart"; 
import React from "react";
import { useQuery } from "react-query";
import Loader from "../component/atoms/Loader";
import CartList from "../component/molecules/CartList";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
const Cart = () => {
    const { data, isLoading } = useQuery(["cart"] ,()=>getCart());
    // console.log(data)
    // data.data.response={
    //     products,
    //     totalPrice,
    // }
    //data 전부 파싱하는 이유는 데이터 없을때 fallback 되게 하기 위해서.
    return (
     <QueryClientProvider client={queryClient}>
        
        {isLoading ? <Loader /> : <CartList data={data} />}
       
        </QueryClientProvider>
    
    
       
    );
};

export default Cart;