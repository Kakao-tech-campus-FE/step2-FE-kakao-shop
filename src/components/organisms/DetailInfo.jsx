import React from 'react'
import InfoBox from '../atoms/detail/InfoBox'
import Image from '../atoms/Image'
import ImgBox from '../atoms/detail/ImgBox'
import DetailContainer from '../atoms/detail/DetailContainer';

const ProductDetail = ( props ) => {

    return (
        <DetailContainer>
            <ImgBox>
                <Image image={props.image} alt={props.name}/>
            </ImgBox>
            <InfoBox>
                <div>{props.name}</div>
                <div>{props.price}</div>   
            </InfoBox>
        </DetailContainer>

    )
}

export default ProductDetail