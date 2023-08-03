// 체크리스트의 각각의 개별항목
// 내용, 체크여부, 체크, 삭제 4가지 props로 받음
import classNames from "classnames";

const CheckListItem = ({ contents, checked, check, del }) => {
  return (
    <li className={classNames({ checked })}>
      <button className="check" onClick={check}></button>
      <div>{contents}</div>
      <button className="delete" onClick={del}>
        삭제
      </button>
    </li>
  );
};

export default CheckListItem;
