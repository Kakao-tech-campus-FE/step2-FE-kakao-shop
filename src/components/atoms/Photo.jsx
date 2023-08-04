import { styled } from 'styled-components';

/**
 * 이미지를 포시하기 위한 컴포넌트
 * @param {string} className - 컴포넌트 클래스명
 * @param {url} src - 이미지 주소
 * @param {string} alt - 이미지 대체 텍스트
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Photo = ({ className, src, alt }) => {
    return (
        <StyledPicture className={className}>
            <source media="(min-width: 650px)" srcSet={src} />
            <img src={src} alt={alt} />
        </StyledPicture>
    );
};

const StyledPicture = styled.picture`
    &.cardImage {
        width: 200px;
        & > img {
            border-radius: ${({ theme }) => theme.border.rad_base};
        }
    }

    &.productImage {
        width: 400px;
    }
`;

/**
 * picture tag 장점
 * SEO 유리
 * -> picture은 source와 img를 받을 수 있음
 */

export default Photo;
