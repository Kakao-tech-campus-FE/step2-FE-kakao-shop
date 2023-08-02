import { useQuery } from 'react-query'
import { comma } from '../../utils/convert'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../../services/cart'

const OrderItems = () => {
  const navigate = useNavigate()
  const {data} = useQuery("carts", 
    getCart,
    {
      onError: (error) => {
        console.error("Error fetching cart data:", error);
        navigate('/404')
      },
      suspense: true
    }
  )
  const {products} = data?.data?.response
  const carts = products.flatMap((product) => product.carts);

  return carts.map((cart) => (
    <div key={cart.id} className='p-4 border bg-white'>
      <div className="product-name font-bold">
        <span>{`${carts.productName} - ${cart.option.optionName}`}</span>
      </div>
      <div className="quantity">
        <span>{comma(cart.quantity)}개</span>
      </div>
      <div className="price font-bold">
        <span>{comma(cart.quantity * cart.price)}원</span>
      </div>
    </div>
  ));
}

export default OrderItems

