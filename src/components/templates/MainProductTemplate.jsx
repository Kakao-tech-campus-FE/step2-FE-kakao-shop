import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { fetchProducts} from '../../services/product';
import { productAtom } from '../../store/product';
import ProductGrid from '../organisms/ProductGrid';
import _ from 'lodash';
import { sleep } from '../../utils/sleep';
import { useQuery } from '@tanstack/react-query';

const MainProductTemplate = () => {
    const [product, setProduct] = useAtom(productAtom);
    const isEndRef = useRef(false);
    const [page, setPage] = useState(0);
    const bottomObserver = useRef(null);

    const {
        isLoading: loading,
    } = useQuery(['product', page], () => fetchData(), {
        onSuccess: (data) => {
            setProduct((prev) => _.uniqBy([...prev, ...data], 'id'));
        },
    });

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isEndRef.current) {
                    setPage((page) => page + 1);
                }
            });
        },
        {
            threshold: 1,
        }
    );

    useEffect(() => {
        if (!loading && page === 0) {
            io.observe(bottomObserver.current);
        }
    }, [loading, page]);

    const fetchData = async () => {
        const { data } = await fetchProducts(page);
        if (data.response.length < 9) {
            isEndRef.current = true;
        }
        await sleep(1);
        return data.response;
    };

    return (
        <div className='w-[90%]'>
            <ProductGrid products={product} loading={loading} />
            <div ref={bottomObserver}></div>
        </div>
    );
};

export default MainProductTemplate;
