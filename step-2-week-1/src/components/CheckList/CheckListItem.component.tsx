import { FC, useState } from "react";
import "@/components/CheckList/check-list-item.css";

export interface CheckListItemProps {
  id: number;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemRemove: (id: number) => void;
}

const CheckListItem: FC<CheckListItemProps> = ({
  id,
  label,
  checked,
  onChange,
  onItemRemove,
}) => {
  const [uid] = useState(
    Date.now().toString(36) + Math.random().toString(36).substr(2)
  );

  return (
    <div className="check-list-item">
      <input
        id={uid}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        value={id}
      />
      <label htmlFor={uid}>{label}</label>
      <button onClick={() => onItemRemove(id)}>Remove</button>
    </div>
  );
};

export default CheckListItem;
