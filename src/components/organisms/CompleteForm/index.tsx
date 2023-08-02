import { styled } from "styled-components";
import { Option } from "../ProductForm";
import CompleteList from "@components/molecules/CompleteList";
import { comma } from "@utils/regex";
import Button from "@components/atoms/Button";
import { useNavigate } from "react-router-dom";

export interface OptionWithQuantity extends Option {
  quantity: number;
}

export interface Product {
  productName: string;
  items: OptionWithQuantity[];
}

interface Data {
  id: number;
  products: Product[];
  totalPrice: number;
}

interface Props {
  data: Data;
}

const CompleteForm = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <h2>주문완료!</h2>
        <p>구매가 정상적으로 완료되었습니다.</p>
      </Header>
      <CompleteList products={data.products} />
      <BtnWrapper>
        <div>
          결제금액<span>{comma(data.totalPrice)}원</span>
        </div>
        <Button
          height={"60px"}
          background={"#fee500"}
          fontSize={"20px"}
          onClick={() => {
            navigate("/");
          }}
        >
          쇼핑 계속하기
        </Button>
      </BtnWrapper>
    </Container>
  );
};

export default CompleteForm;

const Container = styled.div`
  margin: 100px auto 50px;
  width: 870px;
`;

const Header = styled.div`
  margin-top: 120px;
  text-align: center;

  & > h2 {
    font-size: 28px;
    font-weight: 700;
  }

  & > p {
    margin-top: 20px;
    color: #333;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #ebebeb;
  & > div {
    padding: 20px;
    font-size: 18px;
    font-weight: 700;

    & > span {
      float: right;
      color: #0091ff;
    }
  }
`;
