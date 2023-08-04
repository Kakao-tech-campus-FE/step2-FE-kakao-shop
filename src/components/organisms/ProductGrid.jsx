import { styled } from 'styled-components';
import ProductCard from '../molecules/ProductCard';
import ProductCardSkeleton from '../molecules/ProductCardSkeleton';

const ProductGrid = ({ products, loading }) => {
    // loading state

    // error state

    // presentation components: 데이터를 단순히 표기만 하는 용도의 컴포넌트
    return (
        <StyledGrid>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} className="productCard" />
            ))}
            {loading ? new Array(4).fill('').map((_, i) => <ProductCardSkeleton key={i} />) : null}
        </StyledGrid>
    );
};

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;
    height: 100%;
    max-width: inherit;
    color: ${({ theme }) => theme.color.black};
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default ProductGrid;
