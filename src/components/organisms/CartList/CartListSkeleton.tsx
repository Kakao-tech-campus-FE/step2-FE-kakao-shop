import Card from '@components/atoms/Card';
import { Skeleton } from '@mui/material';
import React from 'react';

const CartListSkeleton = () => {
  const list = [1, 2, 3];
  return (
    <>
      {list.map((card) => (
        <div key={`${card}-card`} className="mb-[30px] w-[640px]">
          <Skeleton variant="text" width={500} height={42} className="ml-5" />
          <div className="my-3 ">
            <Card>
              <div className="p-[20px]">
                {list.map((item) => (
                  <Skeleton key={item} variant="rounded" height={90} className="flex justify-between my-3 p-4" />
                ))}
                <div className="flex justify-end mb-[20px]">
                  <Skeleton variant="text" width={150} height={30} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <Skeleton variant="text" width={200} height={50} />
      </div>
      <div className="flex justify-end">
        <Skeleton variant="rounded" width={120} height={40} />
      </div>
    </>
  );
};

export default CartListSkeleton;
