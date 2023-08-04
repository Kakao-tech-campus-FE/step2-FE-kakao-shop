import { useState } from 'react';
import { comma } from '../../utils/convert';
import OptionList from '../atoms/OptionList';
import { useMutation } from '@tanstack/react-query';
import { addCart } from '../../services/cart';
import Button from '../atoms/Button';
import { useAtomValue } from 'jotai';
import { productDetailAtom } from '../../store/product';
import Container from '../atoms/Container';
import Text from '../atoms/Text';
import Counter from '../atoms/Counter';
import StyledOl from '../atoms/StyledOl';
import StyledLi from '../atoms/StyledLi';
import { useNavigate } from 'react-router-dom';
import URL from '../../constants/URL';

const OptionColumn = () => {
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const product = useAtomValue(productDetailAtom);

    const handleOnClickOption = (option) => {
        // 이미 선택된 옵션인지 확인
        const isOptionSelected = selectedOptions.find((el) => el.optionId === option.id);

        // 이미 선택된 옵션이면 수량 증가
        if (isOptionSelected) {
            setSelectedOptions((prev) =>
                prev.map((el) =>
                    el.optionId === option.id ? { ...el, quantity: el.quantity + 1 } : el
                )
            );
            return;
        }

        setSelectedOptions((prev) => [
            ...prev,
            { optionId: option.id, quantity: 1, price: option.price, name: option.optionName },
        ]);
    };

    const handleOnCountChange = (count, optionId) => {
        setSelectedOptions((prev) =>
            prev.map((el) => (el.optionId === optionId ? { ...el, quantity: count } : el))
        );
    };

    // 장바구니 담기 api 처리
    const { mutate } = useMutation({ mutationFn: addCart });

    return (
        <Container direction="column" align="start" gap={'1rem'}>
            <Text className="base">옵션 선택</Text>
            <OptionList options={product.options} onClick={handleOnClickOption} />

            {/* 담긴 옵션 표기 */}
            {selectedOptions.length > 0 && (
                <StyledOl className="selected-option-list">
                    {selectedOptions.map((option) => (
                        <StyledLi key={option.optionId} className="selected-option">
                            <Counter
                                initValue={option.quantity}
                                onIncrease={(count) => handleOnCountChange(count, option.optionId)}
                                onDecrease={(count) => handleOnCountChange(count, option.optionId)}
                            />
                            <Text className="name bold">{option.name}</Text>
                            <Text className="price">{comma(option.price)}원</Text>
                        </StyledLi>
                    ))}
                </StyledOl>
            )}

            <Container className="total-price" direction="column" align="start">
                <Text>
                    총 수량: {selectedOptions.reduce((acc, cur) => acc + cur.quantity, 0)}개
                </Text>
                <Text>
                    총 상품금액:{' '}
                    {comma(selectedOptions.reduce((acc, cur) => acc + cur.price * cur.quantity, 0))}
                    원
                </Text>
            </Container>
            <div className="button-group">
                {/* 장바구니 담기 버튼 위치: 장바구니 담기만 구현 */}
                <Button
                    onClick={() => {
                        mutate(
                            selectedOptions.map((el) => ({
                                optionId: el.optionId,
                                quantity: el.quantity,
                            })),
                            {
                                onSuccess: () => {
                                    alert('장바구니에 담겼습니다.');
                                },
                                onError: () => {
                                    alert('장바구니 담기에 실패했습니다.');
                                },
                            }
                        );
                    }}
                >
                    장바구니 담기
                </Button>
                <Button onClick={() => navigate(URL.ORDER)}>구매하기</Button>
                {/* 톡딜가 구매: 개발은 X */}
            </div>
        </Container>
    );
};

export default OptionColumn;
