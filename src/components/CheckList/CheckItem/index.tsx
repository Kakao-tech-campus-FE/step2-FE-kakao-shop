import React from "react";
import { styled } from "styled-components";

type ContainerProps = { checked?: boolean };

const Container = styled.div<ContainerProps>`
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 700;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ checked }) => (checked ? "#b3d9ff" : "#f8f8f8")};

  button {
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #888;
  }

  p {
    width: 240px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;

type Item = {
  id: number;
  text: string;
  checked: boolean;
};

type Props = {
  item: Item;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const CheckItem = ({ item, setItems }: Props) => {
  const { id, text, checked } = item;

  const onChangeChecked = () => {
    setItems((prev) =>
      prev.map((item) => ({
        ...item,
        checked: item.id === id ? !item.checked : item.checked,
      }))
    );
  };

  const removeItem = () => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Container checked={checked}>
      <input type="checkbox" checked={checked} onChange={onChangeChecked} />
      <p>{text}</p>
      <button onClick={removeItem}>🗑</button>
    </Container>
  );
};

export default CheckItem;
