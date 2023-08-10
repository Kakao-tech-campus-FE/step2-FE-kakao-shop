import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/productInformationColumn";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QueryDetail from "../organisms/QueryDetail";

//props drilling -> 좋은 패턴은 아님..
//redux로 해결
//context API 사용하는것도 좋음.

const ProductDetailTemplate = ({ product }) => {
    return (
        <Container>
            <ProductInformationColumn product={product} />  
            <QueryDetail product={product}> </QueryDetail>
        </Container>
    );
};

export default ProductDetailTemplate;