import { ProductDetail } from "@components/organisms/ProductForm";
import { comma } from "@utils/regex";
import { styled } from "styled-components";

interface Props {
  product: ProductDetail;
}

const ProductInfo = ({ product }: Props) => {
  const { image, price, productName, starCount } = product;

  const randomNumber = Math.floor(Math.random() * 4001) + 1000;

  return (
    <Wrapper>
      <img src={image} alt={productName} />
      <SplitInfo>
        <Rating>
          {new Array(starCount).fill("").map((_, index) => (
            <span key={index}>★</span>
          ))}
          <strong>리뷰 {randomNumber}건</strong>
        </Rating>
        <Detail>
          <p>{productName}</p>
          <p>원산지 : 상세설명 참조</p>
          <button>톡딜가 {comma(price)}원~</button>
        </Detail>
      </SplitInfo>
    </Wrapper>
  );
};

export default ProductInfo;

const Wrapper = styled.section`
  display: flex;
  width: 890px;
  padding: 30px 29px 150px 0;
  border-right: 1px solid #e5e5e5;

  img {
    width: 430px;
    height: 430px;
  }
`;

const SplitInfo = styled.div`
  width: 430px;
  margin-left: 30px;
  flex: 0 0 430px;
`;

const Rating = styled.div`
  padding-bottom: 7px;
  color: #4684e9;
  span {
    font-size: 25px;
    line-height: 0.7;
  }
  strong {
    padding-left: 6px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Detail = styled.div`
  p {
    font-size: 26px;
    line-height: 35px;
    color: #111111;
    word-break: break-all;
  }

  button {
    margin-top: 15px;
    padding: 0 15px;
    height: 45px;
    background-color: #ffeb00;
    border: none;
    border-radius: 23px;
    font-size: 17px;
    cursor: pointer;
  }
`;
