import { useQuery } from "react-query";
import { getProducts } from "../../apis/api";
import { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import Skeleton from "../molecules/Skeleton";

const MainProducts = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError, error } = useQuery("products", getProducts);

  
  const slicedData = data?.data.response.slice(page * 6, page * 6 + 6);
  
  if(isLoading ) return (
    <Container className="flex justify-center">
      <Container className="flex flex-wrap w-280">
        <div className="w-60 m-10"><Skeleton /></div>
        <div className="w-60 m-10"><Skeleton /></div>
        <div className="w-60 m-10"><Skeleton /></div>
        <div className="w-60 m-10"><Skeleton /></div>
        <div className="w-60 m-10"><Skeleton /></div>
        <div className="w-60 m-10"><Skeleton /></div>
      </Container>
    </Container>
  )

  return (
    <Container className="flex justify-center">
      <Container className="flex flex-wrap w-280">
      {slicedData.map((product) => (
        <div key={product.productName} className="w-60 m-10">
          <div className="flex flex-col">
          <img src={`/assets/${product.image}`} alt={product.name} className="w-60 h-60 rounded-lg"/>
          <Button className="text-xs px-1 mt-0.5 border rounded-lg bg-gray-500 font-bold text-white w-16">무료배송</Button>
          <span className="text-sm leading-tight">{product.productName}</span>
          <span className="font-bold">
            <span className="text-blue-600">톡별가</span>
            <span className="mx-1">{product.price}</span>
            <span>원 부터~</span>
          </span>
          </div>
        </div>
      ))}
      </Container>
    </Container>
  );
}

export default MainProducts;
