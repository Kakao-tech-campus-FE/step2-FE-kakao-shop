import React, { useEffect, useState, useRef } from "react";
import oneGrayCat from "../../assets/images/a_gray_cat.png";
import twoGrayCats from "../../assets/images/two_gray_cats.jpg";
import manyGrayCats from "../../assets/images/cute_gray_cats.jpg";

const Radio = () => {
  const [whichGrayCat, setWhichGrayCat] = useState("oneGrayCat");
  const grayCat = {
    oneGrayCat: oneGrayCat,
    twoGrayCats: twoGrayCats,
    manyGrayCats: manyGrayCats,
  };
  const defaultSelection = useRef();
  const onChange = (e) => {
    setWhichGrayCat(e.target.value);
  };
  useEffect(() => {
    defaultSelection.current.checked = "checked";
  }, []);

  return (
    <div>
      <input
        type="radio"
        id="R1"
        name="radios"
        value="oneGrayCat"
        ref={defaultSelection}
        onChange={(event) => onChange(event)}
      />
      <label htmlFor="R1">one Gray Cat</label>
      <input
        type="radio"
        id="R2"
        name="radios"
        value="twoGrayCats"
        onChange={(event) => onChange(event)}
      />
      <label htmlFor="R2">two Gray Cats</label>
      <input
        type="radio"
        id="R3"
        name="radios"
        value="manyGrayCats"
        onChange={(event) => onChange(event)}
      />
      <label htmlFor="R3">many Gray Cats</label>
      <img src={grayCat[whichGrayCat]} alt="grayCatPic" />
    </div>
  );
};

export default Radio;
