import Container from "../components/atoms/Container";
import ProductDetail from "../components/organisms/ProductDetail";

const ProductDetailPage = () => {
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-itmes-center">
            <ProductDetail />
        </Container>
    );
};

export default ProductDetailPage;
