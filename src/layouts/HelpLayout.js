import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Help</h2>

            <nav>
                <NavLink to="faq">FAQ</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}