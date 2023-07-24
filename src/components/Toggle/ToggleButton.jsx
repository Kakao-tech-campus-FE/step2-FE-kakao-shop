import "./ToggleButton.css";

/**
 * 토글 버튼 컴포넌트: on/off를 나타내는 버튼
 * @param {function} onChange 토글 버튼의 상태를 관리하는 함수
 * @param {string} id 토글 버튼의 id
 * @returns
 */
export default function Toggle({ onChange, id }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="toggle-checkbox"
        onChange={onChange}
        id={id}
      />
      <label className="toggle-label" htmlFor={id}>
        <span className="toggle-slider" />
      </label>
    </div>
  );
}
