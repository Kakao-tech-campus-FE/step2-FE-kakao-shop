import {Link} from "react-router-dom";

export const ListItem = ({link, className = "", children, ...props}) => {
    //style default, filled, outlined,
    return (
        <li className={`list-none inline-block ${className}`} {...props}>
            <Link to={link} className="inline-block">
                {children}
            </Link>
        </li>
    );
}
