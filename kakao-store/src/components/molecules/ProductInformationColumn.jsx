import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';
import { BsStarFill } from 'react-icons/bs';

/**
 * 상품 정보 컬럼
 *
 * @param {object} product - 상품 정보
 * @param {string} product.productName - 상품 이름
 * @param {number} product.price - 상품 가격
 * @param {string} product.image - 상품 이미지
 * @returns {JSX.Element} 상품 정보 컬럼
 */

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image, starCount } = product;
  return (
    <div className="product-information-column mx-auto my-10 flex pb-[50px]">
      <div className="col mr-10 h-[430px] w-[430px]">
        <Photo src={image} alt={productName} />
      </div>
      <div className="col  block w-[430px] pb-2">
        <div className="starbox flex">
          {Array.from({ length: starCount }, (_, index) => (
            <BsStarFill key={index} className="star h-5 w-6 text-kakao_blue" />
          ))}
        </div>

        <h1 className="name break-all p-0 text-left  leading-relaxed text-black">{productName}</h1>
        <button className="price-button my-4 rounded-full bg-black px-4 py-2 text-white">
          <p className="price text-lg">{comma(price)}원</p>
        </button>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
