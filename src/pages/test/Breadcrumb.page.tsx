import { BreadcrumbProps } from "@/components/common/Breadcrumb/Breadcrumb.component";
import BreadcrumbTable from "@/components/common/Breadcrumb/BreadcrumbTable.component";
import Button from "@/components/common/Button.component";
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
      <Button onClick={onShowBreadcrumbs}>Click!!!</Button>
      <BreadcrumbTable crumbs={crumbs} />
    </>
  );
};

export default BreadcrumbPage;
