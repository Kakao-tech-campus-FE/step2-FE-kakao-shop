import "../styles/ToggleBtn.css";

const ToggleBtn = ({ setActive }) => {
  return (
    <>
      <h4 style={{ margin: "0" }}>최소 작업량 기능 사용</h4>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => {
            e.target.checked ? setActive(true) : setActive(false);
          }}
        />
        <span className="slider rounded" />
      </label>
    </>
  );
};

export default ToggleBtn;
