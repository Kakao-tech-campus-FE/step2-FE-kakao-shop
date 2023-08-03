import CartItemNumForm from "../organisms/CartItemNumForm";

const CartList = ({cart, setTotalPrice}) => {

  const cartList = cart?.data.response.products.map((item) => {
    const optionDetails = item.carts;

    return (
      <div key={item.productName} className="border p-2">
        <h1 className="text-xl font-bold">{item.productName}</h1>

        {
          optionDetails.map((optionDetail) => {
            return (
              <div key={optionDetail.id} className="flex flex-col border m-2 p-2 text-sm">
                <div className="my-1 flex justify-between">
                  {optionDetail.option.optionName}
                </div>
  
                <CartItemNumForm cartId={optionDetail.id} itemQuantity={optionDetail.quantity} itemPrice={optionDetail.option.price} setTotalPrice={setTotalPrice}/>
              </div>
            )
          })
        }
      </div>
    )
  })

  return (
    <div className="mb-28">
      {cartList}
    </div>
  )
}

export default CartList;