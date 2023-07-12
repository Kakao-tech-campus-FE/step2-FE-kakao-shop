import { Outlet } from "react-router-dom";
import GNB from "../molecules/GNB";
import Footer from "../atoms/Footer";
import Carousel from "../atoms/Carousel";
import * as Container from '../../styles/layout/Layout';

const MainLayout = () => {
    return (
        <Container.Container>
            <GNB />
            <Carousel />
            <Outlet />
            <Footer />
        </Container.Container>
    );
};

export default MainLayout;