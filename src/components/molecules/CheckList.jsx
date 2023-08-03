import { useEffect, useState } from "react";
import CheckBox from "../atoms/CheckBox.jsx";

/**
 * [Molecule] 체크리스트 컴포넌트
 * 다중 체크박스를 생성합니다. [모두 선택/모두 선택 취소] 기능이 있습니다.
 * 
 * 매개변수
 * checkAll : 문자열을 넘겨주면 모두 선택 체크박스를 삽입하고 전달 받은 문자열을 label로 지정합니다.
 * list     : 문자열로 이루어진 배열을 넘겨주면 배열 길이만큼 체크박스를 만들고 각 문자열을 label로 지정합니다.
 * 
 * 사용 예시
 * <CheckList checkAll="모두 동의합니다." list={["구매조건 확인 및 결제 진행 동의", "개인정보 제3자 제공 동의"]} />
 *
 */

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
