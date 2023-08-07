import Box from "../atoms/Box";
import Button from "../atoms/Button";
import { useNavigate } from "react-router";
import { comma } from "../../utils/convert";

const OrderResultTemplate = ({ data }) => {
    const navigate = useNavigate();

    console.log('filtered data', data);

    if(!data) {
        navigate("/error");
        return;
    }

    const getOrderTitle = () => {
        const productCnt = data.products.length;

        if(productCnt === 1){
            return (
                <span>
                    <strong className="font-semibold">{data.products[0].productName}</strong>
                </span>
            );
        }
        return (
            <span>
                <strong className="font-semibold">{data.products[0].productName}</strong>
                {` 외 ${productCnt - 1}건`}
            </span>
        );
    }

    return (
        <div className="w-[870px] mx-auto my-0">
            <div className="py-8 text-center">
                <span className="block text-[36px]">
                구매완료!
                </span>
                <br />
                <span>
                구매가 정상적으로 완료되었습니다.
                </span>
            </div>
            <Box className="title_wrap text-center leading-[44px] bg-white border border-border_gray border-b-0">
                <h1 className="font-semibold">주문상품 정보</h1>
            </Box>
            <Box className="bg-white border border-border_gray p-4">
                <div>
                    <span className="inline-block w-[80px] text-base leading-[30px]">주문번호</span>
                    <strong className="text-base font-semibold">{data.id}</strong>
                </div>
                <div>
                    <span className="inline-block w-[80px] text-base leading-[30px]">상품명</span>
                    {getOrderTitle()}
                </div>
            </Box>

            <Box className="bg-white border border-border_gray mt-3">
                <div>
                <span className="float-left text-[18px] font-semibold leading-[21px] p-5 pr-[24px] pl-[16px]">
                    결제 금액
                </span>
                <span className="block text-right text-[18px] font-semibold leading-[19px] text-blue p-5 pl-0">
                    {`${comma(data.totalPrice)}원`}
                </span>
                </div>
                <Button onClick={() => {
                navigate("/");
                }}>
                <strong>쇼핑 계속하기</strong>
                </Button>
            </Box>
        </div>
    );
}

export default OrderResultTemplate;