import React from 'react';
import { Link } from 'react-router-dom';
import { staticUrl } from '../../utils/convert';

const LoginLink = () => {
  return <Link to={staticUrl('/login')}>로그인</Link>;
};

export default LoginLink;
