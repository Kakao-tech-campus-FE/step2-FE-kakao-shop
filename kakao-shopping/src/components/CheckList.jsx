import React, { useState } from "react";

const CheckList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const doneClick = () => {
    if (isChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };
  console.log(setIsChecked);
  return (
    <>
      <div>
        <input type="checkbox" className="checkbox" onClick={doneClick} />
        체크1
      </div>
      <div>
        <input type="checkbox" className="checkbox" onClick={doneClick} />
        체크2
      </div>
      <div>
        <input type="checkbox" className="checkbox" onClick={doneClick} />
        체크3
      </div>
    </>
  );
};

export default CheckList;
