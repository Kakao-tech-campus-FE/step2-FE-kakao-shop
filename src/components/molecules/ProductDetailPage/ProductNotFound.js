import { useNavigate } from "react-router-dom";

const ProductNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="product-not-found">
      <div className="guide">
        <p className="txt-guide">
          현재 상품이 판매금지 또는 삭제되었거나
          <br />
          존재하지 않는 상품입니다.
        </p>
        <button className="btn-prev-page" onClick={() => {navigate(-1)}}>
          이전
        </button>
      </div>
    </div>
  );
};

export default ProductNotFound;
