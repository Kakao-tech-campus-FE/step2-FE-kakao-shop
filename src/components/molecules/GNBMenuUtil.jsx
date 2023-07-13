import Box from "../atoms/Box";

// 검색, 배송정보, 장바구니
// 장바구니 이미지로만 임시 구현
const GNBMenuUtil = ({ className = "" }) => {
  return (
    <Box className={className}>
      <img alt="shopping cart" src="/cart.png" className="w-9 h-9" />
    </Box>
  );
};
export default GNBMenuUtil;
