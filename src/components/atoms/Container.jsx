import { styled } from 'styled-components';

/**
 * 자식 컴포넌트를 감싸는 역할을 하는 컴포넌트, 간단한 레이아웃 및 스타일이 적용됨
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트에 적용될 클래스명
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Container = ({
    children,
    className = '',
    direction = 'row',
    align = 'center',
    justify = 'center',
    gap = '0',
}) => {
    return (
        <StyledContainer
            className={`container ${className}`}
            direction={direction}
            align={align}
            justify={justify}
            gap={gap}
        >
            {children}
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    ${({ theme, direction, align, justify }) => theme.location.flex(direction, align, justify)};
    padding: ${({ theme }) => theme.padding.small};
    gap: ${({ gap }) => gap};
    &.page {
        width: 100%;
    }

    &.detail-product-info {
        width: 70%;
    }

    &.width-100 {
        width: 100%;
    }

    &.cart-item-box:not(:last-child) {
        padding-bottom: ${({ theme }) => theme.padding.xxxl};
        border-bottom: 2px solid ${({ theme }) => theme.color.light_gray};
    }
`;

export default Container;
