import { Link } from 'react-router-dom';
import * as Img from '../../styles/atoms/ImgLink';

const staticServerUrl = process.env.REACT_APP_PATH || '';

const ImgLink = ({ to, src, alt, className }) => {
  const handleOnCartClick = () => {
    if (className === 'header-cart' && to === '/login') {
      alert('로그인이 필요합니다.');
    }
  };
  return (
    <Img.img>
      <Link to={staticServerUrl + to} onClick={handleOnCartClick}>
        <img src={src} alt={alt} className={className} />
      </Link>
    </Img.img>
  );
};

export default ImgLink;
