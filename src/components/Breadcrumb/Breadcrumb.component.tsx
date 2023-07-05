import { FC } from "react";
import "@components/Breadcrumb/breadcrumb.css";

export interface BreadcrumbProps {
  title: string;
  link: string;
  disable?: boolean;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title, link, disable }) => {
  return (
    <a
      className="breadcrumb"
      href={link}
      target="_self"
      role="link"
      aria-disabled={disable}
    >
      {title}
    </a>
  );
};

export default Breadcrumb;
