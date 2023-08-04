import { useAtomValue } from 'jotai';
import { productDetailAtom } from '../../store/product';
import { comma } from '../../utils/convert';
import Container from '../atoms/Container';
import Photo from '../atoms/Photo';
import Text from '../atoms/Text';

const staticServerUrl = process.env.REACT_APP_PATH || process.env.PUBLIC_URL;

const ProductInformationColumn = () => {
    const product = useAtomValue(productDetailAtom);
    const { productName, price, image } = product;

    return (
        <Container align="flex-start" gap={'1rem'} className="detail-product-info">
            <div className="col">
                <Photo
                    src={`${staticServerUrl}${image}`}
                    alt={productName}
                    className="productImage"
                />
            </div>
            <Container direction="column" align="start">
                <Text className="name xl bold">{productName}</Text>
                <Text className="price base">{comma(price)}원</Text>
            </Container>
        </Container>
    );
};

export default ProductInformationColumn;
