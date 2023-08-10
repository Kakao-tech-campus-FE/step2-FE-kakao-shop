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
        <div className="header w-full sticky top-0 flex justify-between p-4 px-20 bg-white mb-2 self-start">
            <Link to={URL.HOME}>
                <img src={logo} alt="Kakao Logo" height={20} className="h-8" />
            </Link>
            <nav className="flex items-center">
                <Link to={URL.CART}>
                    <AiOutlineShoppingCart color="#000" size="1.5rem" className="mr-4" />
                </Link>

                {!isLogin ? (
                    <Link to={URL.LOGIN}>
                        <span className="pl-4 border-l-2">로그인</span>
                    </Link>
                ) : (
                    <span className="pl-4 border-l-2" onClick={handleLogout}>
                        로그아웃
                    </span>
                )}
            </nav>
        </div>
    );
};

export default GNB;
