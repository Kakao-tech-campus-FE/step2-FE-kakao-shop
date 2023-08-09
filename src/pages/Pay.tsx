import React, { useEffect } from 'react';
import TotalPay from '../components/Pay/atoms/TotalPay';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '..';
import { useQuery } from 'react-query';
import { getCart } from '../api/Products';
import CheckAgrees from '../components/Pay/molecules/CheckAgrees';
import OrderInfoBox from '../components/Pay/organisms/OrderInfoBox';
import queryKey from '../constants/queryKey';

function Pay() {
  const navigate = useNavigate();
  const { isLogin } = useSelector((state: RootState) => state.authReducer);
  const { data } = useQuery([queryKey.Cart], () => getCart(), {
    suspense: true,
    enabled: isLogin,
  });
  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="m-auto max-w-3xl m-auto mt-8">
      <OrderInfoBox products={data?.response.products} />
      <TotalPay amount={data?.response.totalPrice || 0} />
      <CheckAgrees />
    </div>
  );
}

export default Pay;
