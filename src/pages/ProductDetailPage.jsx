import { useParams } from 'react-router-dom';
import { getProductById } from '../services/product';
import { useSetAtom } from 'jotai';
import { productDetailAtom } from '../store/product';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/atoms/Loader';
import Text from '../components/atoms/Text';
import { useNavigate } from 'react-router-dom';
import URL from '../constants/URL';
import Page from '../components/atoms/Page';

const ProductDetailPage = () => {
    const setProduct = useSetAtom(productDetailAtom);
    const navigate = useNavigate();

    const { id } = useParams();
    const { data, error, isLoading } = useQuery([`product/${id}`, id], () => getProductById(id), {
        onError: () => {
            navigate(URL.ERROR);
        },
        enabled: !!id,
    });

    const validate = (data) => {
        if (!data || !data.data || !data.data.response) {
            return false;
        }

        const requiredKeys = ['id', 'productName'];
        const keys = Object.keys(data.data.response);

        for (let i = 0; i < requiredKeys.length; i++) {
            const requiredKey = requiredKeys[i];
            if (!keys.includes(requiredKey)) {
                return false;
            }
        }

        return true;
    }; // 매번 이렇게 검증하는 게 귀찮으니까 typescript라는 것을 쓴다.

    if (validate(data)) {
        setProduct(data.data.response);
    }

    return (
        <Page className="page">
            {isLoading && <Loader />}
            {error && <Text>{error.message}</Text>}
            {validate(data) && <ProductDetailTemplate />}
        </Page>
    );
};

export default ProductDetailPage;
