import NavbarItem from "@components/Navbar/NavbarItem.component";
import NavbarSignItem from "./NavbarSignItem.component";
import { FC } from "react";
import classnames from "classnames";

interface GlobalNavbarProps {
  isSmall?: boolean;
}

const GlobalNavbar: FC<GlobalNavbarProps> = ({ isSmall = false }) => {
  return (
    <>
      <nav
        className={classnames(
          "fixed top-0 left-0 bg-white w-full border-t-[1px] border-b-[1px] border-slate-300 text-sm z-50",
          { "py-4": !isSmall }
        )}
      >
        <div className="flex m-auto max-w-7xl">
          <div className="flex flex-1 justify-start">
            <NavbarItem link="HOME">
              <img
                className="h-8"
                src="/icons/logoKakao.png"
                alt="kakao logo"
              ></img>
            </NavbarItem>
          </div>
          <div className="flex flex-1 justify-center"></div>
          <div className="flex items-center flex-1 justify-end">
            <NavbarItem link="HOME">
              <img className="h-8" src="/icons/cart.png" alt="mycart"></img>
            </NavbarItem>
            <div
              className={classnames(
                "border-r-[1px] border-slate-400 mx-2",
                isSmall ? "h-4" : "h-6"
              )}
            ></div>
            <NavbarSignItem />
          </div>
        </div>
      </nav>
      <div className={classnames(isSmall ? "h-[3rem]" : "h-[5.125rem]")}></div>
    </>
  );
};

export default GlobalNavbar;
