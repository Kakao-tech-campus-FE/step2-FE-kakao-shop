import ProductGrid from "../organisms/ProductGrid";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {getProduct} from "../../store/slice/productSlice";
import '../../styles/mainProductTemplate.css';


const MainProductTemplate = ({children}) => {
    const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);
    const isEnd = useSelector(state => state.product.isEnd);

    const dispatch = useDispatch();

    const [cursor, setCursor] = useState(30);
    const bottomObserver = useRef(null);


    useEffect(() => {
        console.log("isEnd dispatch", isEnd)
        if (!isEnd) {
            dispatch(getProduct(cursor))
        }
    }, [cursor, dispatch]);

    const io = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isEnd) {
                    console.log("isEnd", isEnd)
                    setCursor((prevCursor) => prevCursor - 1);
                }
            })
        },
        {
            root: null,
            threshold: 1.0
        }
    );

    useEffect(() => {
        io.observe(bottomObserver.current);
    }, []);

    return (
        <div className="main-product-template">
            <ProductGrid products={products}/>
            <div className="bottom-observer" ref={bottomObserver}></div>
        </div>
    );
}

export default MainProductTemplate;