import React from 'react'
import { useQuery } from 'react-query';
import { Route } from "react-router-dom";
import strPrice from '../../utils/price';
import getProducts from '../../api/getProducts';
import ItemGroup from '../molecules/ItemGroup';
import ListContainer from '../atoms/productsList/ListContainer';

const ProductsList = ( {match} ) => {
    const { data: obj, error, isError } = useQuery(
        "products",
        getProducts
    )
  
  if (!obj) {
    return (
      <div> 에러 </div>
    ) 
  }
  
  return (
    <ListContainer>
      {obj.data.response.map(( item ) => (
        <ItemGroup 
          link={`/products/${item.id}`}
          image={item.image} 
          productName={item.productName} 
          key={item.productName}
          price={strPrice(item.price)}
          />
        )
      )}
    </ListContainer>
  )
}

export default ProductsList