import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';
import { GoStar, GoStarFill } from 'react-icons/go';

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image, starCount } = product;

  function StarDrawing() {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < starCount) {
        stars.push(<GoStarFill size="20" color="#007aff" />);
      } else {
        stars.push(<GoStar size="20" />);
      }
    }

    return <div className="flex mt-3">{stars}</div>;
  }

  return (
    <div className="product-information-column my-8 xl:flex xl:w-[900px] sm:flex-none sm:block sm:w-1/2">
      <div className="xl:w-1/2 sm:w-4/5">
        <Photo src={`${process.env.REACT_APP_API_URL}${image}`} alt={productName} className="w-full h-auto" />
      </div>
      <div className="xl:mx-8 xl:w-1/2 sm:w-4/5 sm:mx-0">
        {StarDrawing()}
        <div className="product-name mt-4 text-2xl whitespace-break-spaces">{productName}</div>
        <div className="product-price mt-6 px-4 py-2 text-xl text-white bg-black rounded-full border border-solid w-fit">
          {comma(price)}원
        </div>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
