import OptionDetailList from "../molecules/OptionDetailList";

const OrderList = ({ products }) => {
  return (
    products && products.map((item) => {
      const optionDetails = item.carts;
      
      return (
        <div key={item.productName} className="border p-2">
          <h1 className="text-xl font-bold">{item.productName}</h1>
          {optionDetails.map((optionDetail) => {
            return (
              <OptionDetailList key={optionDetail.id} optionDetail={optionDetail} />
            )
          })}
        </div>
      )
    })
  )
}

export default OrderList;