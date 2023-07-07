import Button from "../atoms/Button";
import "../../styles/Header.css";

// children: GNB 영역에 있는 구성요소들
// onClick: 버튼의 클릭 핸들러
// text: 로그인, 로그아웃을 알려주는 버튼의 text
const Header = ({ children, onClick, text }) => {
  return (
    <div>
      <header>
        {children}
        <button
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          {text}
        </button>
      </header>
    </div>
  );
};

export default Header;
