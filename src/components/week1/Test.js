import { useEffect, useState } from "react";
const Test = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Timeout Start");
    setTimeout(() => {
      setState(1);
      console.log("Timeout End");
    }, 3000);
  }, []);

  return (
    <div className={"test " + `${state === 1 ? "" : "testDuplicate"}`}>
      Hello world1
    </div>
  );
};

export default Test;
