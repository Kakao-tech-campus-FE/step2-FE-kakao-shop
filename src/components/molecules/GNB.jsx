import { useEffect, useState } from 'react';
import logo from '../../assets/logoKakao.png';
import { Link } from 'react-router-dom';

const GNB = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') != null) setIsLogin(true);
    }, [isLogin]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('정상적으로 로그아웃 되었습니다.');
    };

    return (
        <header className="header">
            <div className="contents">
                <Link to="/">
                    <img src={logo} alt="Kakao Logo" height={30} />
                </Link>
                <nav></nav>
            </div>
        </header>
    );
};

export default GNB;
