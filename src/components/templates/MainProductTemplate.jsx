import ProductGrid from '../organisms/ProductGrid';
import Container from './../atoms/Container';
import Loader from './../atoms/Loader';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/product';

const MainProductTemplate = () => {
    // products 데이터들을 받아서 ProductGrid로 전달해주어야 한다.
    // products 데이터들은 redux store에서 상태관리를 통해 가져온다.

    // 컨텐츠 하단에 다다르면 추가적으로 데이터를 로드하는 무한스크롤
    // page가 의존성 배열에 들어가야한다. 페이지의 변화가 있을 때 추가적으로 데이터를 로드하도록
    // 감지를 하기위한 기준점을 하나 만들어주어야한다.
    // IntersectionObserver도 하나 만들어주어야한다.
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]) 
    const [end, isEnd] = useState(false) 
    const bottomObserver = useRef(null);

    // 3가지 파라미터 : 쿼리명(고유키), 쿼리함수 = 데이터를 가져오는 함수, 옵션
    // 쿼리키 : 어떠한 트리거가 있으면 데이터를 다시 가져오게 된다.
    // 의존성 배열을 통해 쿼리키를 지정할 수 있다.
    // 여기서는 '/products'가 쿼리키, page 업데이트 시 리액트쿼리가 새 쿼리를 만든다.
    const {data, isLoading, error} = useQuery(['/products', page], () => fetchProducts(page));

    // IntersectionObserver
    // 1번째 파라미터 - 콜백함수(entries, observer)
    // 2번째 파라미터 - options(보통은 threshold가 들어감)
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting && !end) {
                setPage((page) => page + 1);
            }
        })
    }, {
        threshold: 0.6
        }
    )
    
    if(!isLoading && !end) { 
        if(data.data.response.length < 9) { // 마지막으로 받은 배열이 9보다 작을경우(마지막 페이지 데이터일 경우)
            isEnd(true);
        }
        
        const uniqProducts = _.uniqBy([...products, ...data.data.response],'id') // _을 이용한 중복 제거
        
        if(!_.isEqual(uniqProducts, products)) { // 새로 업데이트 된 데이터와 지금의 데이터가 다를 경우
            setProducts(uniqProducts) // 새롭게 데이터 업데이트
        }
    }

    useEffect(() => {
        if(!isLoading && page === 0) {
            io.observe(bottomObserver.current);
            // console.log("감시시작")
            // console.log("page number", page)
            // console.log(end);
        }
    // eslint-disable-next-line
    }, [isLoading, page])

    // Loader : 글로벌 로더
    return (
        <>
            <Container>
                {/* <ProductGrid products={products} loading={true} /> */}
                {!error && isLoading ? 
                <>
                <Loader />
                </>
                : 
                <>
                <ProductGrid products={products} loading={isLoading} />
                <div ref={bottomObserver}></div>
                </>}
            </Container>
        </>
    );
};

export default MainProductTemplate;