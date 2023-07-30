import Container from "../components/atoms/Container";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const ProductDetailPage = () => {
    return (
        <Container className="vw-100 vh-100 d-flex flex-column justify-content-center align-itmes-center">
            <ProductDetailTemplate />
        </Container>
    );
};

export default ProductDetailPage;
