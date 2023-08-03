import { approveRequestAction } from '@store/Order/reducers';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const Approve = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const pgToken = searchParams.get('pg_token');
  const tid = localStorage.getItem('tid');

  useEffect(() => {
    if (!tid) return;
    if (!pgToken) return;

    dispatch(approveRequestAction({ tid: JSON.parse(tid), pgToken }));
  }, [pgToken]);

  return <Fragment />;
};

export default Approve;
