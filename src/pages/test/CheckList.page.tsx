import CheckList from "@components/common/CheckList/CheckList.component";
import { useState } from "react";

const CheckListPage = () => {
  const [checkList, setCheckList] = useState([
    {
      id: 1,
      label: "CheckList 1",
      checked: false,
    },
    {
      id: 2,
      label: "CheckList 2",
      checked: false,
    },
    {
      id: 3,
      label: "CheckList 3",
      checked: false,
    },
  ]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setCheckList((prev) =>
      prev.map((item) =>
        item.id === +value
          ? {
              ...item,
              checked,
            }
          : item
      )
    );
  };

  const onItemRemove = (id: number) =>
    setCheckList((prev) => prev.filter((item) => item.id !== id));

  const onItemAppend = () =>
    setCheckList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        label: `CheckList ${prev.length + 1}`,
        checked: false,
      },
    ]);

  return (
    <CheckList
      items={checkList}
      onChange={onChange}
      onItemRemove={onItemRemove}
      onItemAppend={onItemAppend}
    />
  );
};

export default CheckListPage;
