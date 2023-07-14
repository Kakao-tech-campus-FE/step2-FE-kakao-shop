import { useDispatch, useSelector } from "react-redux"
import Container from "../atoms/Container"
import ProductGrid from "../organisms/ProductGrid";
import { Suspense, useEffect } from "react";
import { getProducts } from "../../store/slices/ProductSlice";

const MainProductTemplate=()=>{
    const [page, setPage] = useState(0);
    const dispatch=useDispatch();
    const bottomObserver=userRef(null);
    const products=useSelector((state)=> state.product.products);
    const loading=useSelector((state)=> state.product.loading);
    const error=useSelector((state)=> state.product.error);
    const isEnd= useSelector((state)=>state.product.isEnd);

const io = newIntersectionObserver(
    (entries, observer)=>{
        entries.array.forEach((entry) => {
            if(entry.isIntersecting && !isEnd){
                setPage((page)=>page+1);
            }
        });
    },{
        threshold:1,
    }
);
//page ===0만?

useEffect(()=>{
    if(!loading&& page ===0){

    io.observe(bottomObserver.current);
   // io.unobserve(bottomObserver.current)
    }
}, [/*loading, page*/]);

    useEffect(()=>{
        dispatch(getProducts(page));

    }, [dispatch,page]); //의존성 배열 인자 없으면 최초 렌더링될때 한번만 실행
    //그냥 없으면 모든 렌더링에 실행
    // 안에있는 콜백함수가 실행
    return(
    <Container>
        {/* <Suspense fallback={<Loader/>}> */}
            <ProductGrid products={products}/>
            <div ref={bottomObserver}></div>
        {/* </Suspense> */}
    </Container>
    )
}
export default MainProductTemplate;