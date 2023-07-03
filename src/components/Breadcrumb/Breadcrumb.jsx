import React from "react";
import { useState } from "react";
import "./Breadcrumb.css";

function Breadcrumb(props) {
  const [curIndex, setCurIndex] = useState(0);
  const handleCurIndex = (index) => {
    setCurIndex(index);
  };
  return (
    <>
      <div>
        {props.links.map((link, index) => (
          <button key={`btn${index}`} onClick={() => handleCurIndex(index)}>
            {link}
          </button>
        ))}
      </div>
      <ul className="breadcrumb">
        {props.links
          .filter((link, index) => index <= curIndex)
          .map((link, index) => (
            <React.Fragment key={`fragment${index}`}>
              <li key={`li${index}`}>{link}</li>
              {index < curIndex && (
                <span key={`span${index}`} className="separator">
                  {" >> "}
                </span>
              )}
            </React.Fragment>
          ))}
      </ul>
      <h1>The Current Page is '{props.links[curIndex]}'</h1>
    </>
  );
}

export default Breadcrumb;
