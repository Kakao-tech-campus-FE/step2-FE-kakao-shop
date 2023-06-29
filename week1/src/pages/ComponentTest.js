import Radio from "../components/RadioButton/Radio";
import Toggle from "../components/Toggle/Toggle";
import CheckList from "../components/CheckList/CheckList";

const ComponentTest = () => {
  return (
    <>
      <CheckList
        title="To Do List"
        item={["체크리스트 만들기", "css 적용하기", "상태관리 적용하기"]}
      />
      <Toggle />
      <Radio />
      <div>컴포넌트 테스트 페이지</div>
    </>
  );
};

export default ComponentTest;
