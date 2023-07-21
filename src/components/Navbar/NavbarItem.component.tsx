import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

interface NavbarItem {
  url: string;
  children: ReactNode;
  isSmall?: boolean;
}

export interface NavbarItemProps extends NavbarItem {
  className?: string;
  onClick?: () => void;
}

const NavbarItem: FC<NavbarItemProps> = ({
  children,
  url,
  className,
  onClick,
  isSmall = false,
}) => (
  <Link
    to={url}
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
