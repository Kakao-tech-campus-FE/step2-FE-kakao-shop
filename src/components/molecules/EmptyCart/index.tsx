import { styled } from "styled-components";
import cart from "@assets/images/cart.png";
import Button from "@components/atoms/Button";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Contents>
        <img src={cart} alt={"장바구니"} />
        <p>장바구니에 담긴 상품이 없습니다.</p>
        <Button
          width={"103px"}
          height={"34px"}
          background={"#222"}
          color={"#fff"}
          fontSize={"14px"}
          onClick={() => {
            navigate("/");
          }}
        >
          쇼핑하기 홈
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default EmptyCart;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 642px;
  border-top: 1px solid #ebebeb;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 52px;
    height: 52px;
  }
  p {
    margin: 8px 0;
    font-size: 18px;
  }
`;
