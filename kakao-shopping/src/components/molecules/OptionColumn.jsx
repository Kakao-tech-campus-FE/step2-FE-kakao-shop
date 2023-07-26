import { useState } from "react";
import OptionList from "./OptionList";
import Skeleton from "../atoms/Skeleton";
import Counter from "../atoms/Counter";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { addCart } from "../../services/cart";
import { ListGroup } from "react-bootstrap";
import Icon from "../atoms/Icon";
import _ from "lodash";

const OptionColumn = ({
    product, // 상품 정보
    isLoading, // 로딩 여부 (Skeleton, Loader)
    className = "", // class
    id = "", // id
    style = {}, // style
}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOnClickOption = (option) => {
        const isOptionSelected = selectedOptions.find(
            (el) => el.optionId === option.id
        );

        if (isOptionSelected) {
            setSelectedOptions((prev) =>
                prev.map((el) => {
                    if (el.optionId === option.id) {
                        return { ...el, quantity: el.quantity + 1 };
                    }
                    return el;
                })
            );
        } else {
            setSelectedOptions((prev) => [
                ...prev,
                {
                    optionId: option.id,
                    quantity: 1,
                    price: option.price,
                    name: option.optionName,
                },
            ]);
        }
    };

    const handleOnChange = (count, id) => {
        if (count <= 0) {
            handleDelete(id);
        } else {
            setSelectedOptions((prev) => {
                return prev.map((el) =>
                    el.optionId === id ? { ...el, quantity: count } : el
                );
            });
        }
    };

    const handleDelete = (id) => {
        setSelectedOptions((prev) => {
            console.log(prev);
            return _.filter(prev, (el) => el.optionId !== id);
        });
    };

    const { mutate } = useMutation({
        mutationFn: addCart,
    });

    return (
        <div className={`option-column ${className}`} id={id} style={style}>
            {!isLoading ? (
                <>
                    <div className="option-group h-75 p-1 overflow-y-auto">
                        <Label className="fs-4 fw-bold">옵션 선택</Label>
                        <OptionList
                            options={product.options}
                            onClick={handleOnClickOption}
                        />
                        <hr />

                        <ListGroup className="selected-option-list text-start">
                            {selectedOptions.map((selected) => (
                                <ListGroup.Item
                                    key={`selected-${selected.optionId}`}
                                    className="selected-option my-1 border position-relative bg-body-tertiary"
                                >
                                    <Button
                                        className="bg-transparent p-0 m-1 border-0 position-absolute top-0 end-0"
                                        onClick={() => {
                                            console.log(selected.optionId);
                                            handleDelete(selected.optionId);
                                        }}
                                    >
                                        <Icon
                                            className="text-dark"
                                            icon="close"
                                        />
                                    </Button>
                                    <Label className="name d-block fs-7 fw-bold me-2">
                                        {selected.name}
                                    </Label>
                                    <div className="d-flex justify-content-between mt-1">
                                        <Counter
                                            value={selected.quantity}
                                            onChange={(count) =>
                                                handleOnChange(
                                                    count,
                                                    selected.optionId
                                                )
                                            }
                                        />
                                        <Label className="price">
                                            {comma(selected.price)}원
                                        </Label>
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>

                    <div className="calc-group p-1">
                        <div className="total-count d-flex justify-content-between align-items-center">
                            <Label className="fs-5 fw-bold">총 개수</Label>
                            <Label className="fs-4 fw-bold">
                                <span className="text-primary">
                                    {comma(
                                        selectedOptions.reduce((prev, cur) => {
                                            return prev + cur.quantity;
                                        }, 0)
                                    )}
                                </span>
                                개
                            </Label>
                        </div>
                        <div className="total-price d-flex justify-content-between align-items-center">
                            <Label className="fs-5 fw-bold">총 상품금액</Label>
                            <Label className="fs-4 fw-bold">
                                <span className="text-danger">
                                    {comma(
                                        selectedOptions.reduce((prev, cur) => {
                                            return (
                                                prev + cur.price * cur.quantity
                                            );
                                        }, 0)
                                    )}
                                </span>
                                원
                            </Label>
                        </div>
                        <Button
                            className="w-100 p-2 bg-kakao rounded"
                            onClick={() => {
                                mutate(
                                    selectedOptions.map((el) => {
                                        return {
                                            optionId: el.optionId,
                                            quantity: el.quantity,
                                        };
                                    }),
                                    {
                                        onSuccess: (data) => {
                                            console.log(data);
                                            alert("장바구니에 담겼습니다.");
                                        },
                                        onError: (error) => {
                                            console.log(error);
                                            alert(
                                                "장바구니 담기에 실패했습니다."
                                            );
                                        },
                                    }
                                );
                            }}
                        >
                            장바구니에 담기
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <Skeleton type="title" />
                    <Skeleton type="list" />
                    <hr />
                    <Skeleton type="text" />
                </>
            )}
        </div>
    );
};

export default OptionColumn;
