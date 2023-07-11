import { Outlet } from "react-router-dom";
import GNB from "../molecules/GNB";
import Footer from "../atoms/Footer";
import Carousel from "../atoms/Carousel";

const MainLayout = () => {
    return (
        <>
            <GNB />
            <Carousel />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;