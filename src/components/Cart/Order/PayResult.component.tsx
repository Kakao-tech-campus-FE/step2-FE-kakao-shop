import { PAYMENT, PRODUCT } from "@/assets/product.ko";
import Txt from "@/components/common/Txt.component";
import { Pay } from "@/dtos/product.dto";
import { pointByKo } from "@/functions/utils";
import { FC } from "react";
import { Link } from "react-router-dom";

interface PayResultProps {
  payData: Pay | undefined;
  isLoading: boolean;
}

const PayResult: FC<PayResultProps> = ({ payData, isLoading }) => {
  if (!payData || isLoading) {
    return <div>로딩중...</div>;
  }

  const productsNumber = payData.products.length;
  const optionsNumber = payData.products.reduce(
    (acc, cur) => acc + cur.items.length,
    0
  );

  const firstProduct = payData.products[0];

  return (
    <div className="flex flex-col gap-4 p-4 bg-white">
      <div className="text-center">
        <Txt typograph="h3" className="block p-4">
          {PAYMENT.PAY_COMPLETE}
        </Txt>
        <Txt>{PAYMENT.PAY_COMPLETE_SUB}</Txt>
      </div>
      <div className="border divide-y rounded">
        <Txt typograph="h5" className="p-4 block text-center">
          {PAYMENT.ORDER_DETAIL}
        </Txt>
        <div className="grid p-3 grid-cols-[fit-content(100%),1fr] gap-2">
          <Txt>{PAYMENT.ORDER_PRODUCT_NAME}</Txt>
          <Txt>
            {firstProduct.productName}{" "}
            {productsNumber > 1 &&
              ` ${PAYMENT.DIFFRENT_TYPE_OF} ${productsNumber}${PRODUCT.PEICE}`}
          </Txt>
          <Txt>{PAYMENT.ORDER_NUMBER}</Txt>
          <Txt>{payData.id}</Txt>
          <Txt>{PAYMENT.ORDER_OPTION}</Txt>
          <Txt>
            {firstProduct.items[0].optionName}{" "}
            {optionsNumber > 1 &&
              ` ${PAYMENT.DIFFRENT_TYPE_OF} ${optionsNumber}${PRODUCT.PEICE}`}
          </Txt>
        </div>
      </div>
      <div className="border rounded">
        <div className="p-4 flex justify-between">
          <Txt typograph="h5">{PAYMENT.COMMON_PAY_AMOUNT}</Txt>
          <Txt typograph="h5" color="primary">
            {pointByKo(payData.totalPrice)} {PRODUCT.WON}
          </Txt>
        </div>
        <Link
          to="/"
          className="w-full p-4 rounded bg-blue-500 hover:bg-blue-600 text-white block text-center"
        >
          {PAYMENT.CONTINUE_SHOPPING}
        </Link>
      </div>
    </div>
  );
};

export default PayResult;
