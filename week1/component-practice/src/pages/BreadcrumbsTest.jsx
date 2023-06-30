import React from "react";
import BPage1 from "./BPage1";
import BPage2 from "./BPage2";
import BHome from "./BHome";

export default function BreadcrumbsTest() {
  const [currentPage, setCurrentPage] = React.useState("/");
  const [num, setNum] = React.useState(0);

  const handelCurrentPage = (url) => {
    setNum((prev) => (prev + 1) % 3);
    setCurrentPage(breads[num].url);
  };

  const breads = [
    {
      id: 0,
      url: "/",
      name: "BreadHome",
      component: <BHome onClick={setCurrentPage} />,
    },
    {
      id: 1,
      url: "/b-page1",
      name: "Page1",
      component: <BPage1 onClick={setCurrentPage} />,
    },
    {
      id: 2,
      url: "/b-page1/b-page2",
      name: "Page2",
      component: <BPage2 onClick={setCurrentPage} />,
    },
  ];

  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ margin: "0 3rem" }}>
        {breads.map(
          (page) =>
            currentPage === page.url && (
              <div key={page.id}>{page.component}</div>
            )
        )}
      </div>

      {currentPage !== "/b-page1/b-page2" && (
        <p className="next-btn" onClick={handelCurrentPage}>
          Next
        </p>
      )}
    </div>
  );
}
