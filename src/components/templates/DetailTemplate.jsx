import React from "react";
import { useQuery, useIsFetching } from 'react-query';
import { useParams } from "react-router-dom";
import getDetail from "../../api/getDetail"

import MainContainer from '../atoms/MainContainer'
import ProductDetail from "../organisms/DetailInfo";
import ProductOption from "../organisms/DetailOption";

import Loader from "../molecules/Loader";
import ErrorBox from "../organisms/ErrorBox";

const DetailTemplate = ( props ) => {

  const params = useParams();
  
  const { data: obj, isLoading, isError, error } = useQuery( 
    ["getproductdetail", params.id], 
    () => getDetail(params.id),
  )
    
    return (
      <>
        {isError && <ErrorBox errorObject={error} />}
        {obj && 
          <MainContainer>
            <ProductDetail 
              image={obj?.data.response.image} 
              name={obj?.data.response.productName} 
              price={obj?.data.response.price} /> 
            <ProductOption options={obj?.data.response.options} />
          </MainContainer> 
        }
      </>
    );
};

export default DetailTemplate;
