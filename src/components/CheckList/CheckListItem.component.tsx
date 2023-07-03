import { memo, useState } from "react";
import "@/components/CheckList/check-list-item.css";

export interface CheckListItemProps {
  id: number;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemRemove: (id: number) => void;
}

const areEqual = (
  prevProps: CheckListItemProps,
  nextProps: CheckListItemProps
) => prevProps.checked === nextProps.checked;

const CheckListItem = memo(
  ({ id, label, checked, onChange, onItemRemove }: CheckListItemProps) => {
    const [uid] = useState(
      Date.now().toString(36) + Math.random().toString(36).substring(2)
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
  },
  areEqual
);

export default CheckListItem;
