import { styled } from "styled-components";
import "../../styles/Photo.css"

const Photo = ({className, src, alt}) => {
    return (
        <>  
            {/* picture : 검색엔진최적화 가능 */}
            {/* 소스와 이미지를 둘다 가져와서 최적화된 것을 보여준다. */}
            <picture className={className}>
                <source srcSet={process.env.REACT_APP_API_URL + src} />
                <ProductImg src={process.env.REACT_APP_API_URL + src} alt={alt} />
            </picture>
        </>
    );
};

export default Photo;

const ProductImg = styled.img`
    border-radius: 10%;
`