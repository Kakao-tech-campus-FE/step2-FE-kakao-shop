import Toggle from "@/components/common/Button/Toggle";
import { useState } from "react";

const TogglePage = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Toggle
      checked={checked}
      onChange={() => setChecked(!checked)}
      children={"label"}
    />
  );
};

export default TogglePage;
