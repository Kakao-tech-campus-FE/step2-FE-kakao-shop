import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Path from "./Path";

export default function Breadcrumb() {
  const location = useLocation();
  const [paths, setPaths] = useState(["home"]);

  useEffect(() => {
    const pathList = location.pathname.split("/").filter((p) => p !== "");
    setPaths(["home", ...pathList]);
  }, [location]);

  return (
    <ol className="font-bold flex mt-6 border-b-2">
      {paths.map((path, index) => (
        <Path key={index} text={path} />
      ))}
    </ol>
  );
}
