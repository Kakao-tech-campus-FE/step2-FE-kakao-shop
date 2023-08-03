import { Link } from "react-router-dom";
import Box from "../atoms/Box";
import { useQuery } from "react-query";
import { getCart } from "../../services/api/cart";
import { useState } from "react";
import { useEffect } from "react";

// 검색, 배송정보, 장바구니
// 장바구니 이미지로만 임시 구현
const GNBMenuUtil = ({ className = "" }) => {
  const { data } = useQuery("cart", getCart);
  const [itemNum, setItemNum] = useState(data?.data?.response?.products.length);

  useEffect(() => {
    setItemNum(
      data?.data?.response?.products.reduce((acc, cur) => {
        return (
          acc +
          !cur.carts.every((option) => {
            return option.quantity === 0;
          })
        );
      }, 0)
    );
  }, [data]);

  return (
    <Box className={className}>
      <Link to="/cart">
        <img alt="shopping cart" src="/cart.png" className="w-9 h-9" />
        {!!itemNum && itemNum > 0 && (
          <span className="absolute top-[24px] left-[22px] min-w-[17px] px-[5px] rounded-[17px] text-center text-[11px] text-white font-semibold bg-red-500">
            {itemNum}
          </span>
        )}
      </Link>
    </Box>
  );
};
export default GNBMenuUtil;
