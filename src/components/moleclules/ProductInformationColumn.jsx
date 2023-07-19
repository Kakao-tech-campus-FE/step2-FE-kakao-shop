import React from "react";
import Photo from "../atoms/Photo";
import { comma } from "../../utils/convert";
import { AiFillStar } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image, starCount } = product;

  return (
    <div className="flex w-auto flex-col items-center lg:w-[72%] lg:flex-row lg:items-start">
      <div>
        <Photo
          src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${image}`}
          alt={productName}
          className="mt-7 block w-[100%] px-2 lg:w-[400px]"
        ></Photo>
      </div>
      <div className="flex flex-col items-center pt-7 lg:items-start lg:px-5">
        <span>
          {Array(starCount)
            .fill(0)
            .map((_, idx) => (
              <AiFillStar
                key={idx}
                className="mb-2 inline text-2xl text-[rgb(77,119,230)]"
              />
            ))}
        </span>
        <h1 className="max-w-[320px] text-center text-[19px] text-[#222222] lg:max-w-none lg:break-keep lg:text-start lg:text-[26px]">
          {productName}
        </h1>
        <span className="mt-3 rounded-3xl bg-kakao px-5 py-[10px] text-[17px] font-semibold lg:text-lg">
          톡딜가 &nbsp;{comma(price)}원~
        </span>
        <div className="relative">
          <BsTruck className="absolute left-[95px] top-[18px] text-lg lg:left-2 lg:top-4" />
          <div
            className="flex flex-col items-center 
          pt-4 text-[15px] text-[#333] lg:block lg:pl-9 lg:pt-3"
          >
            <p className="mb-1">배송비 무료</p>
            <p>제주 추가 3,000원 / 제주 외 도서지역 추가 6,000원</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
