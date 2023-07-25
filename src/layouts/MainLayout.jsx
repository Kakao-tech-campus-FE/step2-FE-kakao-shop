import { Outlet } from "react-router-dom";
import HeaderForm from "../components/organisms/HeaderForm";

/** 레이아웃
 *
 * @return {JSX.Element}
 */
const MainLayout = () => {
  return (
    <>
      <HeaderForm />
      <Outlet />
    </>
  );
};

export default MainLayout;
