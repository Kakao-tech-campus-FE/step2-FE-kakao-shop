import React, { useState } from "react";
import CheckItem from "./CheckItem";

type Item = {
  id: number;
  text: string;
  checked: boolean;
};

const CheckList = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClick = () => {
    setItems((prev) =>
      prev.concat({ id: Date.now(), text: text, checked: false })
    );
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      {items.map((item) => (
        <CheckItem key={item.id} item={item} setItems={setItems} />
      ))}
    </div>
  );
};

export default CheckList;
