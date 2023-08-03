import { comma } from "../../utils/convert";
import { Link } from "react-router-dom";
import Photo from "./Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderOptionItem = ({ productName, productId, option }) => {
    if(option.quantity === 0) return;
    
    return (
        <Link to={`/product/${productId}`}>
        <div className="flex p-4 cursor-pointer">
            <span className="block w-[60px] h-[60px] float-left">
                <Photo 
                    className="rounded-[4px]"
                    src={
                        staticServerUri ?
                        staticServerUri + '/api' + `/images/${productId}.jpg`
                        :
                        `${process.env.REACT_APP_API_URL}images/${productId}.jpg`
                    }
                    alt={productName}
                />
            </span>
            <div className="pl-3">
                <div className="font-semibold text-[14px]">
                    <span>{productName}</span>
                </div>
                <div className="text-[13px] text-[#555] mb-1">
                    <span>{`[옵션] ${option.option.optionName}, `}</span>
                    <span>{comma(option.quantity)}개</span>
                </div>
                <div className="h-[21px]">
                    <span className="inline-block align-top leading-4 text-[16px]">
                        <strong>{comma(option.price)}</strong>원
                    </span>
                </div>
            </div>
        </div>
        </Link>
    );
}

export default OrderOptionItem;