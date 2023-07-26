import {priceFormat} from "../../util/Format";

const PaymentOptionCard = ({cart}) => {
    const {option, quantity, price} = cart;

    return (
        <div className="m-2 border-2 border-gray-300 p-2">
            <div className="flex">
                <h3 className="mr-2">{option?.optionName}</h3>
                <h3>X {quantity}개</h3>
            </div>
            <h1 className="text-lg font-semibold">{priceFormat(price)}</h1>
        </div>
    );
};

export default PaymentOptionCard;