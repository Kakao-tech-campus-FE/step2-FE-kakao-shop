import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";

const ProductDetailTemplate = ({ product }) => {
    return (
        <>
            <ProductInformationColumn product={product}/>
            <OptionColumn product={product}/>
        </>
    );
}

export default ProductDetailTemplate;