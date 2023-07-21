import Container from '../atoms/Container';
import OptionColumn from '../molecules/OptionColumn';
import ProductInformationColumn from '../molecules/ProductInformationColumn';

const ProductDetailTemplate = () => {
    return (
        <Container align="flex-start" justify="space-around">
            <ProductInformationColumn />
            <OptionColumn />
        </Container>
    );
};

export default ProductDetailTemplate;
