import { Suspense, useEffect } from "react";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from "../../store/slices/productSlice";
import { useState, useRef } from "react";
<<<<<<< HEAD
import SkeletonElement from "../skeleton/SkeletonElement";
=======
>>>>>>> fb7870df0 (test)

const MainProductTemplate = () => {
    const [page, setPage] = useState(0);
    const bottomObserver = useRef(null)
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const error = useSelector((state) => state.product.error);
    const isEnd = useSelector((state) => state.product.isEnd);

    //0번페이지 로드 후 값 뿌려줌

    const io = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isEnd) {
                    setPage((page) => page + 1)
                }
            })
        }, {
        threshold: 1
        //bottomObsever가 100% 보일 때 위에 코드 실행
    }
    );
    useEffect(() => {
        if (!loading && page === 0) {
            io.observe(bottomObserver.current);
        }
        //io.observe(bottomObserver.current); //바로 감시를 시작한다면
    }, [loading, page])// 모든 렌더링이 생길때마다 실행.

    useEffect(() => {
        dispatch(getProducts(page))  //0번일때 데이터 불러오기 page 변경이 발생
        //page1에 대해서도 요청
        //page 무한대로 커짐

    }, [dispatch, page])

    return (
        <Container>

            <ProductGrid products={products} />
            <div ref={bottomObserver}></div>
<<<<<<< HEAD
            <Suspense fallback={<SkeletonElement />}></Suspense>
=======
>>>>>>> fb7870df0 (test)

        </Container>
    );
};
//로딩 처리 if 문으로 하는건 옛날방식
//<Suspense fallback={<Loader />}> </Suspense> -> 요즘방식. suspense로 감싸기!
export default MainProductTemplate;