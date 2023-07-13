import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../styles/breadcrumb.css';

const Breadcrumbs = () => {
  return (
    <div className="BreadcrumbContainer">
      <Breadcrumb tag="nav" listTag="div" className="BreadcrumbList">
        <BreadcrumbItem tag="a" href="/홈" className="BreadcrumbItem">
          집
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/게시판" className="BreadcrumbItem">
          떡잎마을
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="/세부내용" className="BreadcrumbItem">
          철수네 집
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
