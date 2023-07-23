import { Outlet } from "react-router-dom";
import GNB from "../molecules/GNB";
import Footer from "../atoms/Footer";
import * as Container from '../../styles/layout/Layout';

const MainLayout = () => {
    return (
        <Container.Container>
            <GNB />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Container.Container>
    );
};

export default MainLayout;