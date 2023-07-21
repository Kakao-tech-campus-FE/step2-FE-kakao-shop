import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import ProductPrice from "../atoms/ProductPrice";
import { useDispatch } from "react-redux";
import { clearItem } from "../../redux/cartRedux";

const MainProducts = ({responseData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    dispatch(clearItem());
    navigate(`/product/${id}`);
  };
  
  return (
    <div className="flex flex-wrap w-240">
    {responseData &&

     responseData.map((product) => (
      <div key={product.productName} className="w-60 m-10">
      <Button onClick={() => handleProductClick(product.id)}>
        <div className="flex flex-col">
          <img src={`/assets/${product.image}`} alt={product.name} className="w-60 h-60 rounded-lg"/>
          <div className="text-xs px-1 mt-0.5 border rounded-lg bg-gray-500 font-bold text-white w-16">무료배송</div>
          <span className="text-sm leading-tight">{product.productName}</span>
          <span className="font-bold">
            <span className="text-blue-600">톡별가</span>
            <ProductPrice price={product.price} className="mx-1"/>
            <span>원 부터~</span>
          </span>
        </div>
      </Button>
      </div>
    ))}
    </div>
  )
}

export default MainProducts;