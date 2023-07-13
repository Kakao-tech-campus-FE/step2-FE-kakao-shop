import { Outlet } from 'react-router-dom';
import GNB from '../components/atoms/GNB';

const MainLayout = () => {
  return (
    <>
      <GNB/>
      <Outlet/>
    </>
  );
};

export default MainLayout; 