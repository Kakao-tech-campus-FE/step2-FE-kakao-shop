import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";

const ProductDetailTemplate = ({ product }) => {
    return (
        <Container className={"flex flex-row justify-center w-full h-full"}>
            <ProductInformationColumn product={product} />
            <OptionColumn product={product}/>
        </Container>
    )
}

export default ProductDetailTemplate;