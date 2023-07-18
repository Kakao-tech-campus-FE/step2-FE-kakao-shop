import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';
import { GoStar, GoStarFill } from 'react-icons/go';

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image, starCount } = product;

  function StarDrawing() {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<GoStarFill size="20" color="#FEE500" />);
      } else {
        stars.push(<GoStar size="20" />);
      }
    }

    return <div className="flex mt-3">{stars}</div>;
  }

  return (
    <div className="product-information-column my-8 flex w-[900px]">
      <div className="w-1/2">
        <Photo src={`${process.env.REACT_APP_API_URL}${image}`} alt={productName} className="w-full h-auto" />
      </div>
      <div className="mx-8 w-1/2">
        <div className="product-name mt-4 text-2xl whitespace-break-spaces">{productName}</div>
        {StarDrawing()}
        <div className="product-price mt-6 text-3xl">{comma(price)}원</div>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
