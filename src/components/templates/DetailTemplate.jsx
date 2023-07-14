import React from "react";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import getDetail from "../../api/getDetail"

import MainContainer from '../atoms/MainContainer'
import ProductDetail from "../organisms/DetailInfo";
import ProductOption from "../organisms/DetailOption";

import Loader from "../molecules/Loader";
import ErrorInvalidID from "../organisms/ErrorInvalidID";

const DetailTemplate = ( props ) => {

  const params = useParams();

  const { data: obj, isLoading, isError, error } = useQuery( 
    ["getproductdetail"], 
    () => getDetail(params.id),
  )

    if (isLoading) {return <Loader />}
    if (isError) {return <ErrorInvalidID />}
    
    return (
      <MainContainer>
            <ProductDetail 
              image={obj?.data.response.image} 
              name={obj?.data.response.productName} 
              price={obj?.data.response.price} /> 
            <ProductOption options={obj?.data.response.options} />
      </MainContainer> 
    );
};

export default DetailTemplate;
