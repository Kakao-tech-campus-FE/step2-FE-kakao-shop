const OrderCompleteListItem = ({ item }) => {

  return (
    <div>
      <h1 className="text-xl font-bold bg-gray-100 p-2">{item.productName}</h1>
      {item.items?.map((option) => {
        return (
          <div key={option.id} className="flex justify-between mx-5 py-5 border border-transparent border-b-gray-100">
            <div>
              <span>{option.optionName}, </span>
              <span>{option.quantity}개</span>
            </div>
            <span>{option.price}원</span>
          </div>
        )
      })}
    </div>

  )
}

export default OrderCompleteListItem;