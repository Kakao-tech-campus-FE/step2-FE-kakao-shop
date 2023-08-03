import React from 'react';
import { useQueryClient } from 'react-query';
import queryKey from '../constants/queryKey';
import { PayResponse } from '../types/Pay';
import Spinner from '../components/common/atoms/Spinner';
import PayedCharge from '../components/PaySuccess/atoms/PayedCharge';
import PayInfoBoxs from '../components/PaySuccess/organisms/PayInfoBoxs';
import HomeBtn from '../components/PaySuccess/atoms/HomeBtn';
import Announce from '../components/PaySuccess/atoms/Announce';

function PaySuccess() {
  const queryClient = useQueryClient();
  const payData = queryClient.getQueryData<PayResponse['response']>(queryKey.Pay);
  if (payData)
    return (
      <div className="m-auto max-w-[720px] mt-8">
        <Announce />
        <PayInfoBoxs products={payData.products} />
        <PayedCharge amount={payData.totalPrice} />
        <HomeBtn />
      </div>
    );
  return <Spinner width={60} height={60} />;
}

export default PaySuccess;
