import { useState } from "react";
import "../../styles/ProcessBar.scss";

const ProcessBar = () => {
  const [process, setProcess] = useState(10);
  return (
    <div>
      <div className="bar">
        <div className="process" style={{ width: process + "%" }}></div>
      </div>
      <div>{process}%</div>
    </div>
  );
};

export default ProcessBar;
