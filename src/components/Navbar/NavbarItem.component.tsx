import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { URL } from "@/assets/url.ko";

interface NavbarItem {
  link: string;
  children: ReactNode;
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
}) => (
  <Link
    to={URL[link as keyof typeof URL]}
    className={`p-4 ${className}`}
    onClick={() => {
      if (typeof onClick !== "function") return;
      onClick();
    }}
  >
    {children}
  </Link>
);

export default NavbarItem;
