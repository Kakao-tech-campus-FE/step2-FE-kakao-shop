import { CART } from "@/assets/product.ko";
import Txt from "@/components/common/Txt.component";
import { ProductOrder } from "@/dtos/product.dto";
import { FC, useReducer } from "react";
import { Link } from "react-router-dom";

const checkReducer = (
  state: typeof initialStatus,
  action: "hole" | "condition" | "thirdParty"
) => {
  state = { ...state };
  switch (action) {
    case "hole":
      state.hole = !state.hole;
      if (state.hole) {
        state.condition = true;
        state.thirdParty = true;
      } else {
        state.condition = false;
        state.thirdParty = false;
      }
      return state;
    case "condition":
      state.condition = !state.condition;
      state.hole = state.thirdParty && state.condition;
      return state;
    case "thirdParty":
      state.thirdParty = !state.thirdParty;
      state.hole = state.thirdParty && state.condition;
      return state;
    default:
      return state;
  }
};

const initialStatus = {
  hole: false,
  condition: false,
  thirdParty: false,
};

interface OrderCheckAndPayProps {
  products: ProductOrder[] | undefined;
}

const OrderCheckAndPay: FC<OrderCheckAndPayProps> = ({ products }) => {
  const [checks, setChecks] = useReducer(checkReducer, initialStatus);

  return (
    <>
      <div className="flex items-center p-4 gap-2">
        <input
          checked={checks.hole}
          onClick={() => setChecks("hole")}
          type="checkbox"
          className="w-4 h-4"
          id="hole"
        />
        <label htmlFor="hole">{CART.HOLE_AGREE}</label>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <input
            checked={checks.condition}
            onClick={() => setChecks("condition")}
            type="checkbox"
            className="w-4 h-4"
            id="condition"
          />
          <label htmlFor="condition">
            {CART.CONDITION_CHECK_AND_PAY_AGREE}
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            checked={checks.thirdParty}
            onClick={() => setChecks("thirdParty")}
            type="checkbox"
            className="w-4 h-4"
            id="thirdParty"
          />
          <label htmlFor="thirdParty">
            {CART.THIRD_PARTY_CHECK_AND_PAY_AGREE}
          </label>
        </div>
        <div className="flex flex-col">
          <Txt typograph="sm" className="font-bold">
            {CART.LEGAL_NOTICE}
          </Txt>
          <Txt typograph="sm" className="font-light">
            {CART.KAKAO_LEGAL_NOTICE}
          </Txt>
        </div>
      </div>
      <Link
        onClick={(e) => {
          if (!checks.hole) {
            e.preventDefault();
            alert(CART.HOLE_AGREE_ALERT);
            return;
          }
          if (products?.length === 0) {
            e.preventDefault();
            alert(CART.EMPTY_CART_ALERT);
            return;
          }
        }}
        to="/cart/save"
        className="w-full p-4 rounded bg-blue-500 hover:bg-blue-600 text-white block text-center"
      >
        {CART.TO_PAY}
      </Link>
    </>
  );
};

export default OrderCheckAndPay;
