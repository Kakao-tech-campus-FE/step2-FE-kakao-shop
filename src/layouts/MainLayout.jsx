import { Outlet } from 'react-router-dom';
import GNB from '../components_2/atoms/GNB';

const MainLayout = () => {
  return (
    <>
      <GNB/>
      <Outlet/>
    </>
  );
};

export default MainLayout; 