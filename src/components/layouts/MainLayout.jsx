import React from "react";
import GNB from "../molecules/GNB";
import { Outlet } from "react-router-dom";
import Footer from "../atoms/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <GNB />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;