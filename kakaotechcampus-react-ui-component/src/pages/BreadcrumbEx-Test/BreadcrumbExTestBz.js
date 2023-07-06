import React from 'react';
import '../../styles/BreadcrumbEx.css';
import Breadcrumb from "../../components/Breadcrumb";

const routes = [
    { path: '/BreadcrumbEx', name: '브레드크럼', exact: 'true' },
    { path: '/BreadcrumbEx/B', name: 'B', exact: 'true' },
    { path: '/BreadcrumbEx/B/z', name: 'z', exact: 'true' },
];

const BreadcrumbExTestBz = () => {
    return (
        <div>
            <h2>브레드크럼</h2>
            <Breadcrumb routes={routes} />
            <div>
                현재 페이지는 z입니다. 더 이상 이동할 수 있는 페이지가 없습니다.
            </div>
        </div>
    );
};

export default BreadcrumbExTestBz;
