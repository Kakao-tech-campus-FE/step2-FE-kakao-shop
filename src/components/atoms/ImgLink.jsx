import { Link } from "react-router-dom";
import * as Img from '../../styles/atoms/ImgLink';

const ImgLink = ({to, src, alt, className}) => {
    return(
        <Img.img>
        <Link to={to}>
            <img src={src} alt={alt} className={className}/>
        </Link>
        </Img.img>
    );
};

export default ImgLink;