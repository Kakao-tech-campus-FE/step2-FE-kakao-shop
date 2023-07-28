import React from 'react'
import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router-dom'
import { getOrders } from 'api/order'
import Section from 'components/atoms/Section'
import PageTitleBox from 'components/atoms/PageTitleBox'
import OrderProducts from 'components/molecules/Order/OrderProducts'
import AccordionBox from 'components/molecules/AccordionBox'
import strPrice from 'utils/price'

const MyOrderPage = () => {
  const location = useLocation()
  const param = useParams()
  const orderId = param.orderId
  
  const query = useQuery(
    ['getOrders', orderId],
    () => getOrders(orderId),
    { suspense: true }
  )

  return (
    <Section>
      <PageTitleBox title={`주문 확인 : 주문 번호 ${orderId}`} />

      <AccordionBox title="배송지 정보" initialOpen>
        <div>배송지</div>
      </AccordionBox>

      <AccordionBox title="주문 상품 정보" initialOpen>
        {! query.isFetching &&
          <OrderProducts products={query.data.products} isOrderResultPage />
        }
      </AccordionBox>

      <AccordionBox title="결제 정보" initialOpen>
        <div>{strPrice(query.data.totalPrice)}</div>
      </AccordionBox>

    </Section>
    
  )
}

export default MyOrderPage