import React from "react";
import Container from "../../common/atoms/Container";
import Photo from "../../common/atoms/Photo";
import Title from "../../common/atoms/Title";
import Box from "../../common/atoms/Box";
import Text from "../../common/atoms/Text";
import { comma } from "../../../utils/convert";

export default function ProductInformationColumn({ product }) {
  const { productName, price, image } = product;
  return (
    <Container className=" w-[890px] flex pt-5 min-h-[700px] border-zinc-300 border-solid border-0 border-r-[1px] ">
      <div>
        <Photo
          className="detail-photo"
          src={process.env.REACT_APP_API_URL + image}
          alt={productName}
        />
      </div>
      <Box className=" px-5 ">
        <Title className=" text-2xl font-semibold mt-0">{productName}</Title>
        <Text className="bg-[#ffe342] w-40 h-12 rounded-3xl flex justify-center items-center font-semibold">
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
