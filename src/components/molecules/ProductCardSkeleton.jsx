import React from 'react';
import CardContainer from '../atoms/productsList/CardContainer'
import ItemTitle from '../atoms/productsList/ItemTitle'
import ItemPrice from '../atoms/productsList/ItemPrice'
import Skeleton from '../atoms/Skeleton';
import ImageBox from '../atoms/productsList/ImageBox';

const ProductsCardSkeleton = ( props ) => {

  return (
    <CardContainer>
        <ImageBox><Skeleton></Skeleton></ImageBox>
        <ItemTitle><Skeleton></Skeleton></ItemTitle>
        <ItemPrice><Skeleton></Skeleton></ItemPrice>
    </CardContainer>
  )
}

export default ProductsCardSkeleton