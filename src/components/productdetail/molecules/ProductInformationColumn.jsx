import React from "react";
import Container from "../../common/atoms/Container";
import Photo from "../../common/atoms/Photo";
import Title from "../../common/atoms/Title";
import Box from "../../common/atoms/Box";
import Text from "../../common/atoms/Text";
import { comma } from "../../../utils/convert";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export default function ProductInformationColumn({ product }) {
  const { productName, price, id } = product;
  return (
    <Container className=" flex min-h-[700px] w-[890px] border-0 border-r-[1px] border-solid border-zinc-300 pt-5 ">
      <div>
        <Photo
          className="detail-photo"
          src={staticServerUrl + `/images/${id}.jpg`}
          alt={productName}
        />
      </div>
      <Box className=" px-5 ">
        <Title className=" mt-0 text-2xl font-semibold">{productName}</Title>
        <Text className="flex h-12 w-40 items-center justify-center rounded-3xl bg-[#ffe342] font-semibold">
          톡딜가 {comma(price)} 원 ~
        </Text>
      </Box>
    </Container>
  );
}

// ⭐️ alt의 중요성
// 1. 이미지가 깨졌을 때 대체 텍스트로 보여줌
// 2. 스크린 리더가 alt를 읽어줌(시각장애인)
// 3. 검색엔진이 alt를 읽어서 검색결과에 노출시킴(SEO)
// 4. 웹 접근성을 높여줌
// 5. 페이지 랭크에 영향을 줌
