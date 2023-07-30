import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";

const CheckTemplate = ({ data }) => {
    const carts = data?.data.response.products;

    const navigate = useNavigate();

    return (
        <main className="cart-container d-flex flex-column h-100 mx-auto">
            <Box>
                <Label className="fs-5 fw-bold">주문 결과</Label>
            </Box>
            <Box>
                <Label className="fs-5 fw-bold border-bottom d-block w-100">
                    주문상품 정보
                </Label>
                {carts.map((item, idx) => {
                    return (
                        <Box key={`item-${idx}`} className="text-start">
                            <div className="border-bottom w-100 fs-6 fw-bold">
                                {item.productName}
                            </div>
                            {item.items.map((elem) => {
                                return (
                                    <Box key={elem.id} className="text-start">
                                        <div className="border-bottom w-100 d-flex align-items-center justify-content-between fw-bold">
                                            <span>옵션</span>
                                            {elem.optionName}
                                        </div>
                                        <div className="border-bottom w-100 d-flex align-items-center justify-content-between fw-bold">
                                            <span>개수</span>
                                            <span>{elem.quantity}개</span>
                                        </div>
                                        <div className="border-bottom w-100 d-flex align-items-center justify-content-between fw-bold">
                                            <span>가격</span>
                                            {comma(elem.price)}원
                                        </div>
                                    </Box>
                                );
                            })}
                        </Box>
                    );
                })}
            </Box>
            <Button
                className="order-btn bg-kakao p-2"
                onClick={() => {
                    navigate(`/`);
                }}
            >
                <span>홈으로 돌아가기</span>
            </Button>
        </main>
    );
};

export default CheckTemplate;
