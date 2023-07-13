import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import type { RootState } from '..';

function useIsNotAuth() {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  useEffect(() => {
    if (isLogin) navigate('/');
  }, []);
}

export default useIsNotAuth;
