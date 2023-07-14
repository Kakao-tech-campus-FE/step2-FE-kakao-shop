

import MainLayout from "../layout/MainLayout";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from "../store/slices/productSlice";
import { fetchProducts } from "../services/product";
import { useEffect, useState } from "react";
import ProductGrid from "../components/organisms/ProductGrid";



function Home() {
    // const dispatch = useDispatch();
    // const list = useSelector((state) => state.products);
    // let res = dispatch(getProducts());
    //selector 가 작동이 계속 안됩니다ㅜㅜㅜ

    const [Data, setInputData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchProducts();
                setInputData(response.data.response);
                //response.data.response.map((data) => { setInputData(data); })

            } catch (error) {
                alert(error);
            }
        };
        fetchData();
    }, []);
    // 이거 setInputData에서 데이터 추가하는걸로 바꾸기.
    return (
        <>
            <MainLayout />
            <ProductGrid products={Data}></ProductGrid>
            {/* <div>{Data.map((d) => <div>{d.productName}</div>)}</div> */}
        </>
    );
}

export default Home;