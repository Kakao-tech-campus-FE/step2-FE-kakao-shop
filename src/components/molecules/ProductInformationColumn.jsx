import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import styled from "styled-components";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import "./ProductInformationColumn.css";

export const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  vertical-align: top;
  margin-bottom: 40px;
  height: 1000px;
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductInformationColumn = ({ product }) => {
  return (
    <Container>
      <Box className="product-box">
        <ColumnContainer className="columnContainer">
          <Column className="column">
            <Photo
              className="photo"
              src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${product.image}`}
              alt={product.productName}
              style={{ height: "100%" }} // 이미지의 높이를 컨테이너의 높이에 맞추도록 설정
            />
          </Column>

          <Column className="column">
            <h1 className="product-name" style={{ fontSize: "14px" }}>
              {product.productName}
            </h1>
            <p className="product-price">{comma(product.price)}원</p>
          </Column>
        </ColumnContainer>
      </Box>
    </Container>
  );
};

export default ProductInformationColumn;
