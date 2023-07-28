import { Outlet } from "react-router-dom";
import HeaderForm from "../components/organisms/HeaderForm";
import FooterForm from "../components/organisms/FooterForm";

/** 레이아웃
 *
 * @return {JSX.Element}
 */
const MainLayout = () => {
  return (
    <>
      <HeaderForm />
      <Outlet />
      <FooterForm className="bg-gray-100" />
    </>
  );
};

export default MainLayout;
