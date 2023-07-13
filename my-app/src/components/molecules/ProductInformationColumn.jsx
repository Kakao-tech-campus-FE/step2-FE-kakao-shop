import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column">
      <div className="col">
        <Photo src={image} alt={productName} />{" "}
        {/* alt(대체 텍스트)는 꼭 명시해줘야 함 - page 랭크에 평가 요소*/}
      </div>
      <div className="col">
        <h1 className="name">{productName}</h1>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
