import { useState, useEffect } from "react";

export default function CheckList({ items }) {
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setSelectedIndexes([...selectedIndexes, e.target.id]);
    } else {
      setSelectedIndexes(selectedIndexes.filter((id) => id !== e.target.id));
    }
  };

  useEffect(() => {
    console.log("CheckList: " + [...selectedIndexes].sort());
  }, [selectedIndexes]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <input id={"c" + index} type="checkbox" onChange={handleChange} />
          <label htmlFor={"c" + index}>{item}</label>
        </div>
      ))}
    </div>
  );
}
