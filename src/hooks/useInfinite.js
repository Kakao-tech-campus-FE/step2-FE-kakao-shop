import { useState,useEffect } from "react"
import { useQuery, QueryClient, useQueryClient } from 'react-query'
import { getProductById, fetchProducts} from '../services/product'
import _ from "lodash"



export const useInfinite = (page) => {
  const [productData, setProductData] = useState([])
  const [end, setEnd] = useState(false)
  const [reRender, setReRender] = useState(false)



  const {isLoading, data, error, isError} = useQuery(['/products',page], () => {return fetchProducts('/products',page)})
  if(!isLoading && !end){

    if(data.data.response.length < 9){ //서버에서 받은 배열의 크기가 10 미만이면 마지막 페이지라고 설정한다
      setEnd(true)
    }
    const uniqProducts = _.uniqBy([...productData, ...data.data.response],'id')
    if(!_.isEqual(uniqProducts,productData)){
      setProductData(uniqProducts)
      setReRender(true)
    }
  }

  return {productData,isLoading,end,reRender}
}