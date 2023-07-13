import React from "react";
import { useParams } from "react-router-dom";
import DetailTemplate from "../components/templates/DetailTemplate";

const DetailPage = ( ) => {

  const params = useParams();
  
  return (
    <DetailTemplate productID={params.id}/>
  );
};

export default DetailPage;
