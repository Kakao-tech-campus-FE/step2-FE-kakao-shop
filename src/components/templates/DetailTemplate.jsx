import React from "react";
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import getDetail from "api/getDetail"

import DetailOption from "components/organisms/DetailOption";
import InfoBox from "components/atoms/detail/InfoBox";
import DetailContainer from "components/atoms/detail/DetailContainer";
import ImgBox from "components/atoms/detail/ImgBox";
import Image from "components/atoms/Image";
import RightContainer from "components/atoms/detail/RightContainer";


const DetailTemplate = ( ) => {

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

export default DetailTemplate;
