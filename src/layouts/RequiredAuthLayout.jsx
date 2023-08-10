import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/molecules/Footer';
import GNB from '../components/molecules/GNB';
import URL from '../constants/URL';

const RequiredAuthLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            console.log('hi');
            alert('로그인이 필요한 서비스입니다.');
            navigate(URL.LOGIN);
        }
    }, [navigate]);

    return (
        <div className="flex-col w-full h-full min-h-screen justify-center">
            <GNB />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RequiredAuthLayout;
