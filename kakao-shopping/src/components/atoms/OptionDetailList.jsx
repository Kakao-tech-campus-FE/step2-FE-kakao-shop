const OptionDetailList = ({ optionDetail }) => {
  return (
    <div key={optionDetail.id} className="flex flex-col border p-2 text-sm">
      <div className="my-1 flex justify-between">
        {optionDetail.option.optionName}
      </div>

      <div>
        {optionDetail.quantity} 개
      </div>

      <div>
        {optionDetail.price} 원
      </div>
    </div>
  )
}

export default OptionDetailList;