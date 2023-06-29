import { FC, ReactNode } from "react";
import "@/components/common/Button/toggle.css";

interface ToggleProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  rounded?: boolean;
}

const Toggle: FC<ToggleProps> = ({
  checked,
  onChange,
  children,
  rounded = true,
}) => {
  const uid = Date.now().toString(36) + Math.random().toString(36).substr(2);

  return (
    <div className="toggle">
      <input type="checkbox" id={uid} checked={checked} onChange={onChange} />
      <label htmlFor={uid}>
        <div className={`slider${rounded ? " round" : ""}`}></div>
        <span>{children}</span>
      </label>
    </div>
  );
};

export default Toggle;
