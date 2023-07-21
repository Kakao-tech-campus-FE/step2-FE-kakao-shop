import Container from "../atoms/Container";
import OptionColumn from "../molecules/OptionColumn";
import ProductInformationColumn from "../molecules/ProductInformationColumn";

const ProductDetailTemplate = ({ product }) => {
    return (
        <Container className="flex flex-row">
            <ProductInformationColumn product={product}/>
            <OptionColumn product={product} />
        </Container>
    );
}

export default ProductDetailTemplate;