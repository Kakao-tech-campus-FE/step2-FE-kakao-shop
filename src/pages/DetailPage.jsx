import React from "react";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import { getDetail } from "api/product"

import Image from "components/atoms/Image";
import DetailOption from "components/organisms/DetailOption";
import { InfoBox, DetailContainer, ImgBox, RightContainer } from "components/atoms/detail";

const DetailPage = () => {

  const params = useParams();
  
  const { data: obj } = useQuery( 
    ["getproductdetail", params.id], 
    () => getDetail(params.id),
    { suspense: true }
  )


  return (
    <>
      {obj && 
      <DetailContainer>
        <ImgBox>
          <Image image={obj.image} alt={obj.productName}/>
        </ImgBox>
        
        <RightContainer>
          <InfoBox name={obj.productName} price={obj.price} />
          <DetailOption options={obj.options} />
        </RightContainer>
      </DetailContainer>
      }
    </>
  );
};

export default DetailPage;
