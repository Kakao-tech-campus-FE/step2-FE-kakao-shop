import OptionDetailList from "../atoms/OptionDetailList";

const OrderList = ({ products }) => {
  return (
    products && products.map((item) => {
      const optionDetails = item.carts;
      
      return (
        <div key={item.productName} className="border p-2">
          <h1 className="text-xl font-bold">{item.productName}</h1>

          {optionDetails.map((optionDetail, index) => (
            <div key={optionDetail.id} className={`border-x border-t ${index === 0 ? 'rounded-t-md' : ''} ${index === optionDetails.length - 1 ? 'rounded-b-md border-b' : ''}`}>
              <OptionDetailList optionDetail={optionDetail} />
            </div>
          ))}

        </div>
      )
    })
  )
}

export default OrderList;