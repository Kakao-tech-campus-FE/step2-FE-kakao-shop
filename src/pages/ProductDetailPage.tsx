import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetailPAge = () => {
  const { id } = useParams().id; // string
  // const parseId = parseInt(id, 10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return <div />;
};
