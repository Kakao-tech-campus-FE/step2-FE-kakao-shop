import { useEffect, useState } from 'react';
import logo from '../../assets/logoKakao.png';
import { Link } from 'react-router-dom';
import URL from '../../constants/URL';
import { AiOutlineShoppingCart, AiOutlineLeft } from 'react-icons/ai';
import Container from '../atoms/Container';

const GNB = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) setIsLogin(true);
    }, [isLogin]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('정상적으로 로그아웃 되었습니다.');
    };

    return (
        <div className="header w-[100%] sticky top-0 flex justify-around p-3 bg-white">
            <Link to={-1}>
                <AiOutlineLeft color="#000" size="1.5rem" />
            </Link>
            <Link to={URL.HOME}>
                <img src={logo} alt="Kakao Logo" height={20} className="h-10" />
            </Link>
            <nav>
                <Link to={URL.CART}>
                    <AiOutlineShoppingCart color="#000" size="1.5rem" />
                </Link>
            </nav>
        </div>
    );
};

export default GNB;
