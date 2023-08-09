import { comma } from "../../utils/convert";

const OptionItem = ({ items }) => {
    return (
        <>
            {items.map((item) => {
                return (
                    <div className="p-2 m-2 border">
                        <div className="flex py-1 space-x-4 text-sm">
                            <span className="w-20">옵션</span>
                            <span className="w-full">{item.optionName}</span>
                        </div>
                        <div className="flex py-1 space-x-4 text-sm">
                            <span className="w-20">구매수량</span>
                            <span className="w-full">{item.quantity}</span>
                        </div>
                        <div className="flex py-1 space-x-4 text-sm">
                            <span className="w-20">금액</span>
                            <span className="w-full">{comma(item.price)}원</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default OptionItem;