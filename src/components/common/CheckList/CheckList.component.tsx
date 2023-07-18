import { FC, MouseEvent } from "react";
import CheckListItem, {
  CheckListItemProps,
} from "@components/common/CheckList/CheckListItem.component";
import "@components/common/CheckList/check-list.css";
import Button from "../Button.component";
interface CheckListProps {
  items: Omit<CheckListItemProps, "onChange" | "onItemRemove">[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemRemove: (id: number) => void;
  onItemAppend: () => void;
}

const CheckList: FC<CheckListProps> = ({
  items,
  onChange,
  onItemAppend,
  onItemRemove,
}) => {
  return (
    <div className="check-list">
      {items.map((item) => {
        return (
          <CheckListItem
            key={item.id}
            id={item.id}
            checked={item.checked}
            label={item.label}
            onChange={onChange}
            onItemRemove={onItemRemove}
          />
        );
      })}
      <Button color="none" onClick={onItemAppend}>
        Add
      </Button>
    </div>
  );
};

export default CheckList;
