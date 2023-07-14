import ProductCard from "../molecules/ProductCard";
import styled from 'styled-components'

const GridCss = styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap:1rem;
  margin: 1rem 0;
  width: 100%;
  max-width: inherit;
`;

const ProductGrid = ({ products }) => {
    // products.map((product) => {
    //     console.log(product)
    // })
    return (
        <GridCss>
            {products.map((product) =>
                (<ProductCard key={product.id} product={product} />)
            )}
        </GridCss>
    );
};

//-> presentation components: 데이터를 단순히 표기만 하는 용도의 컴포넌트
//loading state, error state -> template 에서 관리하자!

export default ProductGrid;