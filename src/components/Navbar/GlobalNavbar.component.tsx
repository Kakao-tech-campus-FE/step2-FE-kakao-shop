import NavbarItem from "@components/Navbar/NavbarItem.component";
import NavbarSignItem from "./NavbarSignItem.component";

const GlobalNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 bg-white  w-full py-2 border-t-[1px] border-b-[1px] border-slate-300 text-sm z-50 ">
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
            <div className="h-6 border-r-[1px] border-slate-400 mx-2"></div>
            <NavbarSignItem />
          </div>
        </div>
      </nav>
      <div className="h-[5.125rem]"></div>
    </>
  );
};

export default GlobalNavbar;
