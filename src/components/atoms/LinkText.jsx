import * as link from '../../styles/atoms/Link';

const LinkText = ({text, to, className, onClick}) => {
    return(
        <span>
            <link.Text to={to} className={className} onClick={text === '로그인' || '로그아웃' ? onClick : null}>{text}</link.Text>
        </span>
    );
};

export default LinkText;