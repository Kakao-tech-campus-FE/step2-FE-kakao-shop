import { useEffect, useState, ReactElement } from 'react';
import { Route, Routes, BrowserRouter, Outlet, useLocation, Link } from 'react-router-dom';

import SignUp from '@pages/SignUp';
import TestPage from '@pages/testPage';

import Breadcrumb from '@components/@base/BreadCrumb';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<TestPage />} />
        <Route path={'/signup'} element={<SignUp />} />
        <Route element={<BreadcrumbTest />}>
          <Route path={'/level1'} element={NavElement('level1', 'level2')} />
          <Route path={'/level2'} element={NavElement('level2', 'level3')} />
          <Route path={'/level3'} element={NavElement('level3', 'level1')} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const NavElement = (prev: string, next: string) => {
  return (
    <div>
      {prev}
      <Link style={{ fontWeight: 'bold', marginLeft: '10px', color: 'tomato' }} to={`/${next}`}>
        {next}
      </Link>
      <Link to="/" style={{ fontWeight: 'bold', marginLeft: '10px', color: '#0067a3' }}>
        홈
      </Link>
    </div>
  );
};

const BreadcrumbTest = () => {
  const { pathname } = useLocation();
  const [item, setItem] = useState<ReactElement[]>([]);

  useEffect(() => {
    switch (pathname) {
      case '/level1':
        setItem([
          <Breadcrumb.Item key={'/level1'} href="/level1">
            level 1
          </Breadcrumb.Item>,
        ]);
        break;
      case '/level2':
        setItem([
          <Breadcrumb.Item key={'/level1'} href="/level1">
            level 1
          </Breadcrumb.Item>,
          <Breadcrumb.Item key={'/level2'} href="/level2">
            level 2
          </Breadcrumb.Item>,
        ]);
        break;
      case '/level3':
        setItem([
          <Breadcrumb.Item key={'/level1'} href="/level1">
            level 1
          </Breadcrumb.Item>,
          <Breadcrumb.Item key={'/level2'} href="/level2">
            level 2
          </Breadcrumb.Item>,
          <Breadcrumb.Item key={'/level3'} href="/level3">
            Level 3
          </Breadcrumb.Item>,
        ]);
        break;
    }
  }, [pathname]);

  return (
    <div>
      <Breadcrumb>{item.map(element => element)}</Breadcrumb>
      <Outlet />
    </div>
  );
};
