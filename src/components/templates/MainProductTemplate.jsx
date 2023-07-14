import ProductGrid from '../organisms/ProductGrid';
import Container from './../atoms/Container';
import Loader from './../atoms/Loader';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../store/slices/productSlice';
import { useInfiniteQuery } from 'react-query';

const MainProductTemplate = () => {
    // products 데이터들을 받아서 ProductGrid로 전달해주어야 한다.
    // products 데이터들은 redux store에서 상태관리를 통해 가져온다.

    // 컨텐츠 하단에 다다르면 추가적으로 데이터를 로드하는 무한스크롤
    // page가 의존성 배열에 들어가야한다. 페이지의 변화가 있을 때 추가적으로 데이터를 로드하도록
    // 감지를 하기위한 기준점을 하나 만들어주어야한다.
    // IntersectionObserver도 하나 만들어주어야한다.
    const [page, setPage] = useState(0);
    const bottomObserver = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const isEnd = useSelector((state) => state.product.isEnd);

    // IntersectionObserver
    // 1번째 파라미터 - 콜백함수(entries, observer)
    // 2번째 파라미터 - options(보통은 threshold가 들어감)
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            console.log(entry)
            // bottomObserver가 (threshold * 100)%가 되었을 때 아래 코드가 실행된다.
            // isEnd(끝페이지인가?)가 false일 경우에만 데이터 요청이 진행된다.
            if (entry.isIntersecting && !isEnd) {
                setPage((page) => page + 1);
            }
        })
    }, {
        threshold: 0.6
    }
    )
    
    // current : useRef를 이용한 element 접근
    // 과연 어느 시점부터 감시를 시작해야하는가? <- 많은 생각이 필요
    useEffect(() => {
        if(!loading && page === 0) {
            io.observe(bottomObserver.current);
            console.log("감시시작")
            console.log("page number", page)
        }
    // eslint-disable-next-line
    }, [loading])

    // 데이터 요청을 하는데 0번 페이지에 9개 밖에 없으면(10개씩 가져올때)
    // 1번 페이지 데이터 요청을 하면 데이터 리턴이 없을 것이다.
    // 어디선가 검증해주지 않으면 끝페이지임을 모르고 계속해서 요청을 하게되므로 이에 대한 상태처리가 필요하다.
    useEffect(() => {
        dispatch(getProducts(page));
    }, [dispatch, page])


    // Loader : 글로벌 로더
    return (
        <>
            <Container>
                {/* <ProductGrid products={products} loading={true} /> */}
                {loading ? 
                <>
                <Loader />
                <ProductGrid products={products} loading={loading} />
                </>
                : <ProductGrid products={products} loading={loading} />}
                <div ref={bottomObserver}></div>
            </Container>
        </>
    );
};

export default MainProductTemplate;