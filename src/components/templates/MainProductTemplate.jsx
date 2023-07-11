import { Suspense } from "react";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { fetchProducts } from "../../apis/product";
import { useQuery } from "react-query";
import Loader from "../atoms/Loader";

const MainProductTemplate = () => {
    const {data: products, isLoading} = useQuery('products', () => fetchProducts()); // 구분자, API 요청 함수
    return(
        <Container>
            <Suspense fallback={<Loader />}>
                {isLoading ? (<Loader />) :  <ProductGrid products={products.response}/>}
            </Suspense>
        </Container>
    );
};

export default MainProductTemplate;