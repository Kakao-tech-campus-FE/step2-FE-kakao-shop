import React from 'react'
import strPrice from '../../utils/price';
import ProductCard from '../molecules/ProductCard';
import ListContainer from '../atoms/productsList/ListContainer';

/**
 * 상품 리스트
 * @param {*} props
 * @param {object} props.obj - 로딩된 페이지 정보가 담겨있는 객체
 * @returns 
 */

const ProductsList = (props) => {

  return (
      <ListContainer>
        {
          props.obj.pages.map(( pageData, i ) => (
            pageData?.data.response.map((item) => (
              <ProductCard 
                link={`/products/${item.id}`}
                image={item.image} 
                productName={item.productName} 
                key={item.productName}
                price={strPrice(item.price)}
              />
            ))
          ))
        }
      </ListContainer>
  )
}

export default ProductsList