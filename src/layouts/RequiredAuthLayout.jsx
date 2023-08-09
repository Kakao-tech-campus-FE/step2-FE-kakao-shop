// 사용자가 로그인 됐을 때만 접근 가능한 레이아웃
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import GNB from '../components/atoms/GNB';
import { useEffectOnce } from '../hooks/useEffectOnce';
import Footer from '../components/atoms/Footer';

const staticServerUrl = process.env.REACT_APP_PATH || '';
const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  useEffectOnce(() => {
    if (localStorage.getItem('user') === null) {
      alert('로그인이 필요한 서비스입니다.');
      navigate(staticServerUrl + '/login');
    }
  }, [navigate]);
  return (
    <div>
      <GNB />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RequiredAuthLayout;
