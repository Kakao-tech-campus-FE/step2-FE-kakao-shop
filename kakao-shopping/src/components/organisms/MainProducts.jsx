import Container from "../atoms/Container";
import Button from "../atoms/Button";

const MainProducts = ({slicedData}) => {
  return (
    <Container className="flex flex-wrap w-280">
    {slicedData.map((product) => (
      <div key={product.productName} className="w-60 m-10">
        <div className="flex flex-col">
        <img src={`/assets/${product.image}`} alt={product.name} className="w-60 h-60 rounded-lg"/>
        <Button className="text-xs px-1 mt-0.5 border rounded-lg bg-gray-500 font-bold text-white w-16">무료배송</Button>
        <span className="text-sm leading-tight">{product.productName}</span>
        <span className="font-bold">
          <span className="text-blue-600">톡별가</span>
          <span className="mx-1">{product.price}</span>
          <span>원 부터~</span>
        </span>
        </div>
      </div>
    ))}
    </Container>
  )
}

export default MainProducts;