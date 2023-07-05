import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function BreadCrumbs() {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div className="crumb">
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })
    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    );
}