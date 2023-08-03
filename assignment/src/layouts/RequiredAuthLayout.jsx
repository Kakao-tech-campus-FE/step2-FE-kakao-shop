// 사용자가 로그인 됐을 때만 접근 가능한 레이아웃
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import GNB from '../components/atoms/GNB';
const staticServerUrl = process.env.REACT_APP_PATH || '';
const RequiredAuthLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      alert('로그인이 필요한 서비스입니다.');
      navigate(staticServerUrl+'/login');
    }
  }, [navigate]);
  return (
    <div>
      <GNB />
      <Outlet />
    </div>
  );
};

export default RequiredAuthLayout;
