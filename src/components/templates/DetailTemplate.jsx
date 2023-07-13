import React from "react";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import getDetail from "../../api/getDetail"

import MainContainer from '../atoms/MainContainer'
import ProductDetail from "../organisms/DetailInfo";
import ProductOption from "../organisms/DetailOption";


const ProductDetailTemplate = ( props ) => {

  const params = useParams();

  const { data: obj, isLoading, isError, error } = useQuery( 
    ["getproductdetail"], 
    () => getDetail(params.id)
  )

  if (!obj) {
      return (<div> 에러 </div>)
  }
  
  const details = obj.data.response;
  return (
    <MainContainer>
      <ProductDetail image={details.image} name={details.productName} price={details.price}></ProductDetail>
      <ProductOption options={details.options}></ProductOption>
    </MainContainer>
  );
};

export default ProductDetailTemplate;
