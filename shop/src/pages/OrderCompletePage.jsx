import {Suspense} from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrderById } from '../services/order'
import Loader from '../components/atoms/Loader'
import {comma} from '../utils/convert.js' 
import Button from '../components/atoms/Button'

const OrderCompletePage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data} = useQuery(`orders/${id}`, 
    ()=>getOrderById(id),
    {
      suspense:true,
      onError: (err)=>{
        console.log(err)
        navigate('/404')
      }
    }
  )
  const {products, totalPrice} = data?.data?.response

  // if(isLoading){
  //   return <Loader/>
  // }

  // if (error){
  //   navigate('/product/404')
  //   return null
  // }
  
  const OrderItems = () =>{
    let renderComponent = []
    products.forEach((product)=>{
      renderComponent.push(product.items.map((item)=>{
        return <div key={item.id} className='p-4 border bg-white'>
          <div className="product-name font-bold">
            <span>{`${product.productName} - ${item.optionName}`}</span>
          </div>
          <div className="quantity">
            <span>{comma(item.quantity)}개</span>
          </div>
          <div className="price font-bold">
            <span>{comma(item.quantity * item.price)}원</span>
          </div>
        </div>
      }))
    })
    return renderComponent
  }

  return (
    <Suspense fallback={<Loader/>}>
    <div className="bg-gray-100 py-5">
      <div className="mx-auto max-w-[1024px] w-[100%]">
        <div className="p-2 border bg-white">
          <h1 className='text-xl font-bold text-center'>주문이 완료되었습니다!</h1>
        </div>
        <div className="mt-2 p-4 border bg-white">
          <h1 className='text-xl font-bold'>주문 내역</h1>
        </div>
        <OrderItems/>
        <div className="border mt-2 p-4 bg-white ">
          <div className='flex items-center justify-between mb-3 '>
            <h3 className='font-bold text-xl'>총 주문 금액</h3>
            <span className='price text-xl font-bold text-blue-600'>{comma(totalPrice)}원</span>
          </div>
          <Button
            className='btn-order p-4 w-full'
            onClick={()=>navigate('/')}
          >
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
    </Suspense>
  )
}

export default OrderCompletePage