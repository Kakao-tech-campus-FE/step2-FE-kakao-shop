

import MainProductTemplate from "../components/templates/MainProductTemplate";
import Header from "../components/molecules/Header";
import Footer from "../components/molecules/Footer";


function Home() {
    // const dispatch = useDispatch();
    // const list = useSelector((state) => state.products);
    // let res = dispatch(getProducts());
    //selector 가 작동이 계속 안됩니다ㅜㅜㅜ

    // const [Data, setInputData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetchProducts();
    //             setInputData(response.data.response);
    //             //response.data.response.map((data) => { setInputData(data); })

    //         } catch (error) {
    //             alert(error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    // 이거 setInputData에서 데이터 추가하는걸로 바꾸기.
    return (
        <>
            <Header />
            {/* <ProductGrid products={Data} /> */}
            <MainProductTemplate></MainProductTemplate>
            <Footer/>


        </>
    );
}

export default Home;