import Container from "../components/atoms/Container";
import ProductDetailLayout from "../layouts/ProductDetailLayout";

const ProductDetailPage = () => {
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-itmes-center">
            <ProductDetailLayout />
        </Container>
    );
};

export default ProductDetailPage;
