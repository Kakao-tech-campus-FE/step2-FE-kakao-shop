import { FC } from "react";
import NavbarItem, { NavbarItemProps } from "./NavbarItem.component";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { localStorage } from "@/functions/localstorage";
import { setSignOut } from "@/store/signSlice";

const NavbarSignItem: FC<Omit<NavbarItemProps, "children" | "link">> = ({
  className,
}) => {
  const { isSignIn } = useAppSelector((state: RootState) => state.signSlice);
  const dispatch = useAppDispatch();

  const signOut = () => {
    localStorage.remove("Authorization");
    dispatch(setSignOut());
  };

  const signString = isSignIn ? "로그아웃" : "로그인";
  const linkString = isSignIn ? "SIGN_OUT" : "SIGN_IN";

  return (
    <NavbarItem
      link={linkString}
      className={className}
      children={signString}
      onClick={isSignIn ? signOut : undefined}
    />
  );
};

export default NavbarSignItem;
