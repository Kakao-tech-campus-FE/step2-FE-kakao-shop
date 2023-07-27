import Header from "../organisms/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>);
}

export default MainLayout;
