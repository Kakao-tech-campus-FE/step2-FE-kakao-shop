import { FC } from "react";

export interface BreadcrumbProps {
  title: string;
  link: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title, link }) => {
  return (
    <a href={link} target="_self">
      {title}
    </a>
  );
};

export default Breadcrumb;
