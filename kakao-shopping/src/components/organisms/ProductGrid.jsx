import ProductCard from "../molecules/ProductCard";
import styled from "styled-components";

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin: 1rem auto;
    width: 720px;
    max-width: inherit;
`;

const ProductGrid = ({ products }) => {
    return (
        <StyledGrid className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </StyledGrid>
    );
};

export default ProductGrid;
