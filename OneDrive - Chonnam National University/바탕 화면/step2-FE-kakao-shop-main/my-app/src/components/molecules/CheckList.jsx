import { useEffect, useState } from "react";
import CheckBox from "../atoms/CheckBox.jsx";

const CheckList = ({ checkAll = "", list }) => {
    const initialList = Array.from({ length: list.length }, () => false);
    const [checkedAll, setCheckedAll] = useState(false);
    const [checkedList, setCheckedList] = useState(initialList);
  
    useEffect(() => {
      if (checkedList.some((el) => el === false)) {
        setCheckedAll(false);
      } else {
        setCheckedAll(true);
      }
    }, [checkedList]);

    const handleOnCheckAll = (e) => {
        if (e.target.checked) {
            setCheckedList(Array.from({ length: list.length }, () => true));
            setCheckedAll(true);
          } else {
            setCheckedList(Array.from({ length: list.length }, () => false));
            setCheckedAll(false);
          }
        };
      
        const handleOnCheck = (e) => {
          setCheckedList((prev) => {
            const temp = [...prev];
            temp[e.target.value] = e.target.checked;
            return temp;
          });
        };
      
        return (
          <>
            {checkAll && (
              <CheckBox
                label={checkAll}
                checked={checkedAll}
                onChange={handleOnCheckAll}
              />
            )}
            {list.map((item, index) => {
              return (
                <CheckBox
                  key={index}
                  value={index}
                  label={item}
                  checked={checkedList[index]}
                  onChange={handleOnCheck}
                />
            );
        })}
    </>
  );
};

export default CheckList;