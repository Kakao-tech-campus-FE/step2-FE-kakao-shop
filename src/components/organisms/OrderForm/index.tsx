import OrderContainer from "@components/atoms/OrderContainer";
import { styled } from "styled-components";
import { useRef } from "react";
import { Item } from "../CartForm";
import { useState } from "react";
import OrderItem from "@components/atoms/OrderItem";
import { comma } from "@utils/regex";
import Button from "@components/atoms/Button";
import { useMutation } from "@tanstack/react-query";
import { postOrders } from "@apis/postOrders";
import { useNavigate } from "react-router-dom";

interface Props {
  item: Item;
}

const OrderForm = ({ item }: Props) => {
  const infoRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  const { products, totalPrice } = item;

  const { mutate } = useMutation({ mutationFn: postOrders });
  const navigate = useNavigate();

  const [agreePay, setAgreePay] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const agreePayRef = useRef<HTMLInputElement>(null);
  const agreePolicyRef = useRef<HTMLInputElement>(null);

  const handleAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === "all-agree") {
      setAgreePay(checked);
      setAgreePolicy(checked);
    }

    if (name === "pay-agree") {
      setAgreePay(checked);
    }
    if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const handleOrders = () => {
    const payload: void = undefined;
    mutate(payload, {
      onSuccess: (res) => {
        const id = res.data.response.id;
        navigate(`/orders/complete/${id}`);
      },
      onError: (err: any) => {
        if (err.status === 404) {
          navigate("/notFound");
        }
      },
    });
  };

  const handleToggleInfo = () => {
    if (infoRef.current && toggleRef.current) {
      infoRef.current.classList.toggle("hide");
      toggleRef.current.classList.toggle("hide");
    }
  };

  const getTotalQuantity = () => {
    return products.reduce((totalQuantity, product) => {
      return (
        totalQuantity +
        product.carts.reduce((subtotal, cart) => subtotal + cart.quantity, 0)
      );
    }, 0);
  };

  return (
    <OrderContainer>
      <InfoWrapper>
        <h3>
          <strong>배송지 정보</strong> (kakao 계정 제공)
          <span ref={toggleRef} onClick={handleToggleInfo}>
            v
          </span>
        </h3>
        <DestinationInfo ref={infoRef} className="hide">
          <p>등록된 배송지가 없습니다.</p>
          <button>배송지 입력</button>
        </DestinationInfo>
      </InfoWrapper>
      <CartInfoWrapper>
        <h3>
          <strong>주문상품 정보</strong> (총 {getTotalQuantity()}개)
        </h3>
        {products.map((product) => (
          <OrderItem key={product.id} product={product} />
        ))}
      </CartInfoWrapper>
      <PayInfoWrapper>
        <h3>결제정보</h3>
        <PayInfo>
          <p>
            상품금액 ({getTotalQuantity()}개)<span>{comma(totalPrice)}원</span>
          </p>
          <p>
            배송비<span>0원</span>
          </p>
          <p>
            할인금액<span>0원</span>
          </p>
          <div>
            최종 결제 금액<span>{comma(totalPrice)}원</span>
          </div>
        </PayInfo>
      </PayInfoWrapper>
      <AgreeWrapper>
        <h3>
          <input
            type="checkbox"
            id="all-agree"
            name="all-agree"
            checked={agreePay && agreePolicy}
            onChange={handleAgree}
          />
          <label htmlFor="all-agree">
            <strong>전체 동의하기</strong>
          </label>
        </h3>
        <div>
          <p>
            <input
              type="checkbox"
              id="agree"
              name="pay-agree"
              ref={agreePayRef}
              checked={agreePay}
              onChange={handleAgree}
            />
            <label htmlFor="agree">구매조건 확인 및 결제 진행 동의</label>
          </p>
          <p>
            <input
              type="checkbox"
              id="policy"
              name="policy-agree"
              ref={agreePolicyRef}
              checked={agreePolicy}
              onChange={handleAgree}
            />
            <label htmlFor="policy">개인정보 제3자 제공 동의</label>
          </p>
        </div>
        <div
          className={`btn-wrapper ${agreePay && agreePolicy ? "" : "hidden"}`}
        >
          <Button
            height={"60px"}
            background={"#fee500"}
            fontSize={"20px"}
            onClick={handleOrders}
          >
            {comma(totalPrice)}원 결제하기
          </Button>
        </div>
      </AgreeWrapper>
    </OrderContainer>
  );
};

export default OrderForm;

const InfoWrapper = styled.div`
  margin-bottom: 14px;
  background-color: #fff;
  border-top: 1px solid #ebebeb;

  & > h3 {
    padding: 20px 24px 20px 16px;
    font-size: 18px;
    strong {
      font-weight: 700;
    }
    span {
      float: right;
      font-size: 28px;
      cursor: pointer;
    }

    span.hide {
      transform: rotate(180deg);
    }
  }
`;

const DestinationInfo = styled.div`
  padding: 0 16px;
  overflow: hidden;

  &.hide {
    height: 0;
  }

  & > p {
    padding: 7px 0 16px;
    font-size: 14px;
    line-height: 21px;
    color: #666;
    text-align: center;
  }
  & > button {
    margin-bottom: 16px;
    width: 100%;
    height: 36px;
    border: 1px solid #dee0e6;
    border-radius: 3px;
    background-color: #fff;
    font-size: 13px;
    line-height: 36px;
    color: #333;
    cursor: pointer;
  }
`;

const CartInfoWrapper = styled.div`
  margin-bottom: 14px;
  border-top: 1px solid #ebebeb;
  & > h3 {
    padding: 20px 24px 20px 16px;
    background-color: #fff;
    font-size: 18px;
    strong {
      font-weight: 700;
    }
  }
`;

const PayInfoWrapper = styled.div`
  background-color: #fff;
  & > h3 {
    padding: 16px;
    font-weight: 700;
    font-size: 18px;
  }
`;

const PayInfo = styled.div`
  padding: 20px 16px 0;
  border-top: 1px solid #ebebeb;
  & > p {
    padding: 8px 0;
    font-size: 14px;
    span {
      float: right;
    }
  }

  & > div {
    margin-top: 20px;
    padding: 20px 0;
    border-top: 1px solid #ebebeb;
    font-size: 18px;

    span {
      float: right;
      font-weight: 700;
    }
  }
`;

const AgreeWrapper = styled.div`
  margin-top: 20px;
  background-color: #fff;

  & > h3 {
    position: relative;
    padding: 16px;
  }

  & > div {
    position: relative;
    padding: 8px 16px;
    border-top: 1px solid #ebebeb;
    p {
      padding: 12px 0;
    }
  }
  & > div.btn-wrapper {
    padding: 0;
  }
  & > div.btn-wrapper.hidden {
    height: 0;
    overflow: hidden;
  }
  input[type="checkbox"] {
    appearance: none;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 0 8px 0 0;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;

    &::before {
      content: "✔";
      position: absolute;
      left: 20%;
      bottom: 10%;
      color: #fff;
      visibility: hidden;
    }

    &:checked {
      background-color: #fee500;
    }

    &:checked::before {
      visibility: visible;
    }
  }
  label {
    padding-left: 32px;
    cursor: pointer;
    strong {
      font-size: 18px;
      font-weight: 700;
    }
  }
`;
