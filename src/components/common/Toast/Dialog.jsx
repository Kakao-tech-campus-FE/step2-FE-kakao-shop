import "./Dialog.css";

/**
 * Dialog 컴포넌트: 메세지를 표시하는 창
 * @param {string} children Dialog에 표시할 텍스트
 * @param {function} onClick 확인 버튼을 눌렀을 때 실행할 함수
 * @returns
 */
export default function Dialog({ children, onClick }) {
  return (
    <div className="dialog-background">
      <div className="dialog-container">
        <p className="dialog-text">{children}</p>
        <p className="dialog-button" onClick={onClick}>
          확인
        </p>
      </div>
    </div>
  );
}
