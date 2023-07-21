import Button from "@components/atoms/Button";
import OptionList from "@components/atoms/OptionList";
import { Option, ProductDetail } from "@components/organisms/ProductForm";
import { styled } from "styled-components";
import cart from "@assets/images/cart_white.png";
import { useState } from "react";
import OptionBasket from "@components/atoms/OptionBasket";
import { useMutation } from "@tanstack/react-query";
import { postAddCart } from "@apis/postAddCart";
import { comma } from "@utils/regex";
import LoginModal from "../LoginModal";
import Toast, { ToastData } from "../Toast";

export interface SelectedOption extends Option {
  quantity: number;
}

interface Props {
  product: ProductDetail;
}

const ProductOption = ({ product }: Props) => {
  const [productOptions, setProductOptions] = useState<SelectedOption[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastList, setToastList] = useState<ToastData[]>([]);

  const { mutate } = useMutation({ mutationFn: postAddCart });

  const createPayload = () => {
    const payload = productOptions.map((el) => {
      return {
        optionId: el.id,
        quantity: el.quantity,
      };
    });
    return payload;
  };

  const handleOptions = (option: Option) => {
    const isSelected = productOptions.find((el) => el.id === option.id);

    if (isSelected) return;

    setProductOptions((prev) => [
      ...prev,
      {
        id: option.id,
        quantity: 1,
        price: option.price,
        optionName: option.optionName,
      },
    ]);
  };

  const handleAddCart = () => {
    const payload = createPayload();
    if (payload.length === 0) {
      setToastList((prev) =>
        prev.concat({
          id: Date.now(),
          type: "warning",
          message: "옵션을 먼저 선택해주세요.",
        })
      );
      return;
    }
    mutate(payload, {
      onSuccess: () => {
        setToastList((prev) =>
          prev.concat({
            id: Date.now(),
            type: "success",
            message: "장바구니에 상품이 담겼습니다.",
          })
        );
      },
      onError: (err: any) => {
        if (err.status === 401) {
          setModalOpen(true);
        }
      },
    });
  };

  const handleModal = () => {
    setModalOpen(false);
  };

  const getTotalQuantity = () => {
    return productOptions.reduce((total, option) => total + option.quantity, 0);
  };

  const getTotalPrice = () => {
    return comma(
      productOptions.reduce(
        (total, option) => total + option.quantity * option.price,
        0
      )
    );
  };

  return (
    <>
      <Wrapper>
        <ListBox>
          <strong>옵션선택</strong>
          <OptionList options={product.options} onClick={handleOptions} />
          {productOptions &&
            productOptions.map((option) => (
              <OptionBasket
                key={option.id}
                option={option}
                setProductOptions={setProductOptions}
              />
            ))}
        </ListBox>
        <Fee>
          <Row>
            <strong>배송방법</strong>
            <span>택배배송</span>
          </Row>
          <Row>
            <strong>배송비</strong>
            <span>무료</span>
          </Row>
        </Fee>
        <Result>
          <span>총 수량 {getTotalQuantity()}개</span>
          <b>
            총 주문금액<strong>{getTotalPrice()}</strong> 원
          </b>
        </Result>
        <BtnWrapper>
          <Button
            width={"202px"}
            height={"60px"}
            background={"#ffeb00"}
            fontSize={"18px"}
          >
            톡딜가로 구매하기
          </Button>
          <Button
            width={"60px"}
            height={"60px"}
            background={"#000"}
            onClick={handleAddCart}
          >
            <img src={cart} alt="장바구니" />
          </Button>
        </BtnWrapper>
      </Wrapper>
      {modalOpen && <LoginModal onClick={handleModal} />}
      <Toast toastList={toastList} setToastList={setToastList} />
    </>
  );
};

export default ProductOption;

const Wrapper = styled.section`
  padding: 30px 0 30px 30px;
  width: 330px;
  height: 350px;
`;

const ListBox = styled.div`
  max-height: 201px;
  overflow: auto;

  & > strong {
    padding: 0 0 10px 3px;
    font-weight: 700;
    line-height: 30px;
  }
`;

const Fee = styled.div`
  padding-bottom: 15px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding-bottom: 4px;
  font-size: 14px;
  strong {
    display: inline-block;
    width: 65px;
    font-weight: 700;
  }
`;

const Result = styled.div`
  padding: 22px 3px 20px 0;
  border-top: 1px solid #f2f2f2;
  font-size: 18px;
  b {
    float: right;

    strong {
      font-weight: 700;
      padding-left: 6px;
      color: #ff5959;
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 4px;

  img {
    width: 38px;
    height: 38px;
  }
`;
