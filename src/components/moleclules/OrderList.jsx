import React from "react";
import Photo from "../atoms/Photo";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../apis/product";
import { comma } from "../../utils/convert";
import { Link } from "react-router-dom";

export default function OrderList({ item }) {
  const { data } = useQuery(
    [`product/${item.id}`],
    () => getProductById(item.id),
    { suspense: true }
  );

  return (
    <div className="mb-3 bg-white">
      {item.carts.map((option) => (
        <Link
          to={`/product/${item.id}`}
          key={option.id}
          className="mx-3 flex border-b border-gray-200 py-4 last:border-0"
        >
          <Photo
            src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${data.data.response.image}`}
            alt={item.productName}
            className="mx-2 block h-[60px] w-[60px] rounded-md border border-gray-100"
          ></Photo>
          <div className="w-[calc(100%-80px)]">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
              {item.productName}
            </p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-gray-600">
              [옵션]{option.option.optionName}, {option.quantity}개
            </p>
            <p className="text-sm">{comma(option.price)}원</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
