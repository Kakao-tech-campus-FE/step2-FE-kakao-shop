import '../../styles/atoms/Link.css';

const Link = ({ href, className = "", children}) => {
    return <a href = {href} className = {`link ${className}`}>{children}</a>
};

export default Link;