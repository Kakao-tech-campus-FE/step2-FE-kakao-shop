import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/navigationBar';

export default function MainLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
