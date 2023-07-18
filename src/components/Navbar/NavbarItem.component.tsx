import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { URL } from "@/assets/url.ko";
import classnames from "classnames";

interface NavbarItem {
  link: string;
  children: ReactNode;
  isSmall?: boolean;
}

export interface NavbarItemProps extends NavbarItem {
  className?: string;
  onClick?: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({
  children,
  link,
  className,
  onClick,
  isSmall = false,
}) => (
  <Link
    to={URL[link as keyof typeof URL]}
    className={classnames(className, isSmall ? "p-4" : "p-2")}
    onClick={() => {
      if (typeof onClick !== "function") return;
      onClick();
    }}
  >
    {children}
  </Link>
);

export default NavbarItem;
