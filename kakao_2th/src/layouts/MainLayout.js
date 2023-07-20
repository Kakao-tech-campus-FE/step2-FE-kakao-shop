import { Outlet } from "react-router-dom"
import GNB from "../components/molecules/Gnb"

const MainLayout = () => {
    return (
        <>
            <GNB></GNB>
            <Outlet></Outlet>
        </>
    )
}

export default MainLayout