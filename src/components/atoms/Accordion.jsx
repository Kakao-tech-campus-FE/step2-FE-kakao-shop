import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggle}>
        <button className="accordion-icon">{isOpened ? "-" : "+"}</button>
        <div className={"accordion-title"}>{title}</div>
      </div>
      <div
        className={
          "accordion-body " + `${!isOpened ? "accordion-body-folded" : ""}`
        }
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
