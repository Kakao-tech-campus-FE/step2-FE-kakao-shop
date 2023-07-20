import React from "react";
import { useParams } from "react-router-dom";
import DetailTemplate from "../components/templates/DetailTemplate";
import MainContainer from "../components/atoms/MainContainer";


const DetailPage = ( ) => {

  const params = useParams();
  
  return (
    <MainContainer>
      <DetailTemplate productID={params.id}/>
    </MainContainer>
  );
};

export default DetailPage;
