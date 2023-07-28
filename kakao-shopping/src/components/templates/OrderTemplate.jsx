import Box from "../atoms/Box";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Checklist from "../molecules/Checklist";
import { order } from "../../services/order";

const OrderTemplate = ({ data }) => {
    console.log(data);

    const deliveryRequest = [
        "직접입력",
        "빠른 배송 부탁드립니다.",
        "배송 전 연락 부탁드립니다.",
        "부재 시, 경비실에 맡겨주세요.",
    ];

    const agreements = [
        "구매 조건 확인 및 결제 진행 동의",
        "개인정보 제 3자 제공 동의",
    ];

    const carts = data?.data.response.products;

    const [requestIdx, setRequestIdx] = useState(0);
    const [agreementCheck, setAgreementCheck] = useState([false, false]);

    const handleAgreeCheck = (...idxs) => {
        setAgreementCheck(() => {
            let prevArr = [...agreementCheck];
            idxs.forEach((idx) => {
                prevArr[idx] = !prevArr[idx];
            });
            return prevArr;
        });
    };

    const getTotalPrice = () => {
        let totalPrice = 0;

        carts.forEach((product) => {
            product.carts.forEach((option) => {
                totalPrice += option.price * option.quantity;
            });
        });

        return totalPrice;
    };

    const navigate = useNavigate();

    return (
        <main className="cart-container d-flex flex-column h-100 mx-auto">
            <Box>
                <Label className="fs-5 fw-bold">주문하기</Label>
            </Box>
            <Box>
                <Label className="fs-5 fw-bold border-bottom d-block w-100">
                    배송지 정보
                </Label>
                <Box className="text-start">
                    <div className="border-bottom w-100 d-flex align-items-center">
                        이름
                        <span className="bg-primary rounded fs-7 ms-1 p-1 fw-bold text-white">
                            기본배송지
                        </span>
                    </div>
                    <div className="border-bottom w-100">전화번호</div>
                    <div>주소</div>
                </Box>
            </Box>
            <Box>
                <Label className="fs-5 fw-bold">배송 요청사항</Label>
                <Form.Select
                    name=""
                    value={requestIdx}
                    onChange={(e) => {
                        console.log(e.currentTarget.value);
                        setRequestIdx(parseInt(e.currentTarget.value));
                    }}
                >
                    {deliveryRequest.map((request, idx) => {
                        return (
                            <option key={`delivery-request-${idx}`} value={idx}>
                                {request}
                            </option>
                        );
                    })}
                </Form.Select>
                <InputGroup>
                    <Form.Control
                        as="textarea"
                        disabled={requestIdx === 0 ? false : true}
                        placeholder="요청사항을 입력해주세요."
                    ></Form.Control>
                </InputGroup>
            </Box>
            <Box>
                <Label className="fs-5 fw-bold border-bottom d-block w-100">
                    주문상품 정보
                </Label>
                {carts.map((item) => {
                    return (
                        <Box key={item.id} className="text-start">
                            <div className="border-bottom w-100 fs-6 fw-bold">
                                {item.productName}
                            </div>
                            {item.carts.map((elem) => {
                                return (
                                    <Box key={elem.id} className="text-start">
                                        <div className="border-bottom w-100 d-flex align-items-center justify-content-between fw-bold">
                                            <span>옵션</span>
                                            {elem.option.optionName}
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
            <Box>
                <div className="d-flex justify-content-between m-2  fw-bold">
                    <span className="expect">총 주문 금액</span>
                    <div className="sum-price text-primary">
                        {comma(getTotalPrice())}원
                    </div>
                </div>
            </Box>
            <div>
                <Box>
                    <Checklist
                        id={"agree-check"}
                        checkLabels={agreements}
                        className="text-start"
                        onCheck={handleAgreeCheck}
                        checks={agreementCheck}
                    />
                </Box>
            </div>
            <Button
                className="order-btn bg-kakao p-2"
                onClick={async () => {
                    if (
                        agreementCheck.reduce((acc, cur) => {
                            return acc & cur;
                        }, true)
                    ) {
                        order().then((response) => {
                            console.log(response);
                            navigate(`/check/${response.data.response.id}`);
                        });
                    }
                }}
            >
                <span>결제하기</span>
            </Button>
        </main>
    );
};

export default OrderTemplate;
