import * as link from '../../styles/atoms/Link';

const LinkText = ({text, to, className}) => {
    return(
        <span>
            <link.Text to={to} className={className}>{text}</link.Text>
        </span>
    );
};

export default LinkText;