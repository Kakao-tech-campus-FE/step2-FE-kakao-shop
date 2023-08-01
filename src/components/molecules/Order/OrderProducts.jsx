import React from 'react'
import strPrice from 'utils/price'

const OrderProducts = ( { products, isOrderResultPage } ) => {

  /** 0인 항목 거르기 */ 
  const isExist = (collection) => {
    // POST orders/orderID 에서 받은 데이터일 때
    if (isOrderResultPage) {
      const exist = collection.items.filter(
        (optionItem) => optionItem.quantity > 0)
      return exist
    } 
    
    // GET carts/ 에서 받은 데이터일 때
    const exist = collection.carts.map((optionItem) => (
      (optionItem.quantity > 0) ?
        {
          id: optionItem.option.id, 
          optionName: optionItem.option.optionName,
          quantity: optionItem.quantity,
          price: optionItem.option.price,
        } : undefined
      )).filter(e => e)

    return exist
  }

  return (
    <CollectionContainer>
      {products?.map((collection) => 
        isExist(collection).length > 0 && 
        <CollectionBox collectionName={collection.productName}>
          {isExist(collection).map((option) => (
            <OptionBox
              optionName={option.optionName} 
              quantity={option.quantity}
              price={strPrice(option.price)}
            />
          ))}
          <ShippingFee shippingFee={0}/>
        </CollectionBox>
      )}
    </CollectionContainer>
  )
}

export default OrderProducts


const CollectionContainer = (props) => {
  return (
    <div className='my-[-0.75rem] divide-y divide-solid divide-gray-300'>
        {props.children}
    </div>
  )
}

const CollectionBox = (props) => {
  return (
    <div className='w-full py-2'>
        <div className='my-2'>
            {props.collectionName}
        </div>
        {props.children}
    </div>
  )
}

const OptionBox = (props) => {
    return (
      <div className='flex pl-4 gap-2 text-sm'>
        <div>
            {`[옵션] ${props.optionName}`}
        </div>
        <div className='ml-auto'>{`${props.quantity}개`}</div>
        <div className='text-right min-w-[76px]'>{props.price}</div>
        
      </div>
    )
}

const ShippingFee = (props) => {
  return (
      <div className='
        text-center mt-2.5 text-sm text-blue-500
      '>
        {props.shippingFee > 0 ? `배송비 ${props.shippingFee}` : '무료배송'}
      </div>
  )

}
