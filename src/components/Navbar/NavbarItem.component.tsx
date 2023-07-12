import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import URLS from "@/assets/url.ko.json";

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
    to={URLS[link as keyof typeof URLS].link}
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
