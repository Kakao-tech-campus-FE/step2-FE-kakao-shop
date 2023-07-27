import { Outlet } from "react-router-dom";

import Footer from "components/organisms/Footer";
import GNB from "components/organisms/GNB";

export default function Layout() {
  return (
    <>
      <GNB />
      <div className="min-h-screen pt-16 pb-28">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
