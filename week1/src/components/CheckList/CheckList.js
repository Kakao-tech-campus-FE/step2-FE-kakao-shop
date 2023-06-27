import "../../styles/Checkbox.scss";

const CheckList = () => {
  return (
    <div className="CheckboxPaper">
      <div className="title">To Do List</div>
      <div>
        <input type="checkbox" id="create" />
        <label htmlFor="create">체크박스 만들기</label>
      </div>
      <div>
        <input type="checkbox" id="css" />
        <label htmlFor="css">css 적용하기</label>
      </div>
      <div>
        <input type="checkbox" id="manage" />
        <label htmlFor="manage">상태관리하기</label>
      </div>
    </div>
  );
};

export default CheckList;
