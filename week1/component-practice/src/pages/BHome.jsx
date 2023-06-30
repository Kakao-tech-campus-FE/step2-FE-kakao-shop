import Breadcrumbs from "../components/Breadcrumbs";

export default function BHome({ onClick }) {
  const breads = [{ id: 0, url: "/", name: "BreadHome", component: <BHome /> }];
  return (
    <>
      <Breadcrumbs paths={breads} onClick={onClick} />
      <p>현재 페이지: bread home</p>
    </>
  );
}
