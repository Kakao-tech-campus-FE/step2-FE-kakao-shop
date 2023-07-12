import { FC } from "react";
import Breadcrumb, {
  BreadcrumbProps,
} from "@/components/common/Breadcrumb/Breadcrumb.component";
import "@components/common/Breadcrumb/breadcrumb-table.css";

interface BreadcrumbTableProps {
  crumbs: BreadcrumbProps[];
}

const BreadcrumbTable: FC<BreadcrumbTableProps> = ({ crumbs }) => {
  const copy = () => {
    const crumbsString = crumbs.map((crumb) => `${crumb.title}`).join("/");
    navigator.clipboard.writeText(crumbsString);
  };

  return (
    <div className="breadcrumb-table">
      {crumbs.map((crumb, index) => (
        <div key={index}>
          <Breadcrumb
            title={crumb.title}
            link={crumb.link}
            disable={index < crumbs.length - 1}
          />
          {index < crumbs.length - 1 && <span> / </span>}
        </div>
      ))}
      <button onClick={copy}>
        <img src="/copy.svg" alt="copy" />
      </button>
    </div>
  );
};

export default BreadcrumbTable;
