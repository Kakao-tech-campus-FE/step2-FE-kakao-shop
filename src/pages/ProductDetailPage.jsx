import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/product";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../components/atoms/Loader";
import ProductInformationColumn from "../components/molecules/ProductInformationColumn";
import Container from "../components/atoms/Container";
import Box from "../components/atoms/Box";
import OptionColumn from "../components/molecules/OptionColumn";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0 50px 0;
  vertical-align: top;
  margin-bottom: 40px;
  height: 1000px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.column-product {
    width: 70%;
  }
  &.column-option {
    right: 20%;
    position: fixed;
  }
`;

const ProductDetailPage = () => {
  const navigate = useNavigate();
  // const id = useParams().id; // Params로 받은 코드는 항상 string 값
  const { id } = useParams(); //구조 분해 할당 코드

  const dispatch = useDispatch();
  // const parseId = parseInt(id, 10); //-> 전처리
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  ); //구분자, API 요청 함수

  const product = data?.data?.response;

  return (
    <div>
      {isLoading && <Loading />}
      {error && <div>{error.message}</div>}
      {data ? (
        <>
          <ColumnContainer className="columnContainer">
            <Column className="column-product">
              <ProductInformationColumn product={product} />
            </Column>
            <Column className="column-option">
              <OptionColumn product={product} />
            </Column>
          </ColumnContainer>
        </>
      ) : (
        navigate("/404")
      )}
    </div>
  );
};

export default ProductDetailPage;
