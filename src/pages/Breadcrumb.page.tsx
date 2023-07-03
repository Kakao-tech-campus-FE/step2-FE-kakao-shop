import { BreadcrumbProps } from "@/components/Breadcrumb/Breadcrumb.component";
import BreadcrumbTable from "@/components/Breadcrumb/BreadcrumbTable.component";
import { useState } from "react";

const BreadcrumbPage = () => {
  const [crumbs, setCrumbs] = useState<BreadcrumbProps[]>([]);
  const showBreadcrumbs = (crumb: BreadcrumbProps) =>
    setCrumbs([...crumbs, crumb]);

  return (
    <>
      <button
        onClick={() =>
          showBreadcrumbs({
            title: "Home",
            link: "/",
          })
        }
      >
        Click!!!
      </button>
      <BreadcrumbTable crumbs={crumbs} />
    </>
  );
};

export default BreadcrumbPage;
