import { Link } from "react-router-dom";
import * as Img from '../../styles/atoms/ImgLink';

const ImgLink = ({to, src, alt, className}) => {
    const handleOnCartClick = () => {
        if(className === 'header-cart' && to === '/login') {
            alert('로그인이 필요합니다.');
        };
    };
    return(
        <Img.img>
        <Link to={to} onClick={handleOnCartClick}>
            <img src={src} alt={alt} className={className}/>
        </Link>
        </Img.img>
    );
};

export default ImgLink;