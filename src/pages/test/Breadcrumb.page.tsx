import { BreadcrumbProps } from "@/components/common/Breadcrumb/Breadcrumb.component";
import BreadcrumbTable from "@/components/common/Breadcrumb/BreadcrumbTable.component";
import { MouseEvent, useState } from "react";

const BreadcrumbPage = () => {
  const [crumbs, setCrumbs] = useState<BreadcrumbProps[]>([]);
  const showBreadcrumbs = (crumb: BreadcrumbProps) =>
    setCrumbs([...crumbs, crumb]);

  const onShowBreadcrumbs = (e: MouseEvent) => {
    e.preventDefault();
    showBreadcrumbs({
      title: "Home",
      link: "/",
    });
  };

  return (
    <>
      <button onClick={onShowBreadcrumbs}>Click!!!</button>
      <BreadcrumbTable crumbs={crumbs} />
    </>
  );
};

export default BreadcrumbPage;
