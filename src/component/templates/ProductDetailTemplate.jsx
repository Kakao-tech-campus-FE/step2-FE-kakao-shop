import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";

import { QueryClient, QueryClientProvider } from 'react-query';
import QueryDetail from "../organisms/QueryDetail";


const ProductDetailTemplate = ({ product }) => {
    return (
        <Container>
            <ProductInformationColumn product={product} />  
            <QueryDetail product={product}> </QueryDetail>
        </Container>
    );
};

export default ProductDetailTemplate;