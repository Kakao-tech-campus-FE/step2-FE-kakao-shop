/**
 * 장바구니에 담긴 상품의 수를 표시하는 배지
 *
 * @param {number} count 배지에 표시될 숫자
 */
const CartBadge = ({ count }) => {
  return (
    <span className="cart-count absolute -top-1 left-3 pt-0.5 text-[0.3rem] text-center text-white bg-red-600 rounded-full w-4 h-4">
      {count}
    </span>
  );
};

export default CartBadge;
