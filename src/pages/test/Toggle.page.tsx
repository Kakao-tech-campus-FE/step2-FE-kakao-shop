import Toggle from "@components/common/Button/Toggle.component";
import { useState } from "react";

const TogglePage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Toggle checked={checked} onChange={() => setChecked(!checked)}>
      Toggle!
    </Toggle>
  );
};

export default TogglePage;
