import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/product'
import { useQuery } from 'react-query'
import MissedUrl from './MissedUrl'
import Loader from '../molecules/Loader'
import ProductDetailTemplate from '../templates/ProductDetailTemplate'


function ProductDetailPage() {
  const { id } = useParams() //string으로 언제나 들어옴

  const key = '/product'
  const { data, error, isLoading, isError } = useQuery([key,id], () => {return getProductById(id)})
  
  const product = data?.data?.response 
  // product에 우리가 원하는 데이터가 정확하게 존재하느냐?
  // 검증 함수: data 정확히 들어와는지 체크, validate function or typescript

  const validate = () => {
    if(!product) {
      return false
    }

    const requiredKeys = [
      "id",
      "productName"
    ]

    const keys = Object.keys(product)

    for(const requiredKeys of keys){
      if(!keys.includes(requiredKeys)){
        alert(`prodcut 객체에 ${requiredKeys}가 없습니다.`)
        return false;
      }
    }

    return true
  }

  if(!validate()) {
    return;
  }

  if(isError) {
    return error?.data?.status === 404 ? <MissedUrl /> : <div>{error.data.error.message}</div>
  }

  if(isLoading) {
    return <Loader />
  }

  return (
    <ProductDetailTemplate product={product} />
  )
}

export default ProductDetailPage