import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import {Helmet} from "react-helmet";

const ProductDetailTemplate = ({product}) => {
    return (
        <>
            <Helmet
                title={`${product.productName} - 카카오톡 쇼핑하기`}
            >
            </Helmet>
            <Container className={"flex flex-row justify-center w-full h-full"}>
                <ProductInformationColumn product={product}/>
                <OptionColumn product={product}/>
            </Container>
        </>
    )
}

export default ProductDetailTemplate;