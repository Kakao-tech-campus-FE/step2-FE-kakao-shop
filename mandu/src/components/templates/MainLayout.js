import Header from "../organisms/Header";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex items-center flex-col">
            <Header/>
            <Outlet/>
        </div>);
}

export default MainLayout;
