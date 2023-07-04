import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import GNB from '../components/templates/GNB';

const HomePage = () => {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
      <GNB />
      <h1>과제 1주차</h1>
      <Link to="/ComponentTest">
        <button>컴포넌트 테스트</button>
      </Link>
    </div>
  );
};

export default HomePage;