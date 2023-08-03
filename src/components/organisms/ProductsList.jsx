import React from 'react'
import { ProductCard } from 'components/molecules/ProductCard';

/**
 * 상품 리스트
 * @param {*} props
 * @param {object} props.obj - 로딩된 페이지 정보가 담겨있는 객체
 * @returns 
 */

const ProductsList = (props) => {

  return (
      <>
        {
          props.obj.pages.map(( pageData ) => (
            pageData?.map((item) => (
              <ProductCard 
                link={`/products/${item.id}`}
                image={item.image} 
                productName={item.productName} 
                key={item.productName}
                price={item.price}
              />
            ))
          ))
        }
      </>
  )
}

export default ProductsList