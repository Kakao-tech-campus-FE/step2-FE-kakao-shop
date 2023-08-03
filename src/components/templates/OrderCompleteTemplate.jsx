import { useNavigate } from 'react-router-dom'
import { comma } from '../../utils/convert'
import OptionItems from '../atoms/OptionItems'
import { styled } from 'styled-components'

const ProductsList = styled.div`
  padding: 1rem; 

  .label {
    font-size: 0.8rem;
    font-weight: bold;
  }

  p{
    font-size: 1.2rem;
    line-height: 1.5;
  }
`

const ProductItems = (products) => products.map((product) => {
  return (
    <div className='flex flex-col gap-2 mb-4 border-2 border-slate-200 border-solid' key={product.id}>
      <div className="font-bold text-sm">상품명</div>
      <p className='text-lg text-gray-400'>{product.productName}</p>
      <OptionItems items={product.items} />
    </div>
  )
})

function OrderCompleteTemplate({ data }) {
  const { products, totalPrice } = data.data.response
  const navigation = useNavigate()

  function Home() {
    navigation('/')
  }

  return (
    <section className='py-10 my-10 mx-auto max-w-[500px] w-full'>
      <div className='text-center py-10'>
        <h1 className='text-xl font-bold'>구매완료!</h1>
        <h2 className='text-lg'>구매가 정상적으로 완료됐습니다.</h2>
      </div>
      <div className='border-2 border-slate-200 border-solid mb-4'>
        <div className='text-sm border-b p-4 border-gray-200 text-center font-bold'>
          주문상품 정보
        </div>
        <ProductsList>
            {ProductItems(products)}
            <div className="font-bold text-lg">총 금액</div>
            <p className='text-xl'>{comma(totalPrice)}</p>
        </ProductsList>
        <div className="border-t-2 border-slate-200 border-solid">
          <div className='flex justify-between p-4'>
            <span className='font-bold text-xl'>일반 결제 금액</span>
            <span className='text-indigo-600 text-xl font-bold'>{comma(totalPrice)}</span>
          </div>
          <button
            className='w-full py-4 text-black font-bold text-xl bg-yellow-400'
            onClick={Home}
          >쇼핑 계속하기</button>
        </div>
      </div>
    </section>
  )
}

export default OrderCompleteTemplate