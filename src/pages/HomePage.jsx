// import Title from "../component/atoms/Title";
// import Container from "../component/atoms/Container";
// import HomeForm from "../component/organisms/HomeForm";

import { useSelector } from "react-redux";
import Loader from "../component/atoms/Loader";
import MainProductTemplate from "../component/templates/MainProductTemplate";

const Homepage = () => {
    const loading = useSelector((state) => state.product.loading);

    return(
        <div>
            {loading && <Loader />}
            <MainProductTemplate />
        </div>
        
    )
}


export default Homepage;