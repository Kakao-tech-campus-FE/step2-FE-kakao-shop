import { NavLink, Outlet } from "react-router-dom"
import BreadCrumbs from "../components/Breadcrumbs"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>부산대FE_이다빈</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
                <BreadCrumbs />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}