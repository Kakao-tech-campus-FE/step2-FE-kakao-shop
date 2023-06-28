import { FC } from "react";
import Breadcrumb, { BreadcrumbProps } from "./Breadcrumb";

interface BreadcrumbTableProps {
  crumbs: BreadcrumbProps[];
}

const BreadcrumbTable: FC<BreadcrumbTableProps> = ({ crumbs }) => {
  return (
    <div>
      {crumbs.map((crumb, index) => (
        <>
          <Breadcrumb key={index} title={crumb.title} link={crumb.link} />
          {index < crumbs.length - 1 && <span> / </span>}
        </>
      ))}
    </div>
  );
};

export default BreadcrumbTable;
