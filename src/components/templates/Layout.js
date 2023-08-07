import { Outlet } from "react-router-dom";

import Footer from "components/organisms/Footer.js";
import GNB from "components/organisms/GNB.js";

export default function Layout() {
  return (
    <>
      <GNB />
      <div className="min-h-screen pt-16 pb-28 flex flex-col items-center">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
