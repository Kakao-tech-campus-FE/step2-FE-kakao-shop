import { Link } from "react-router-dom";
import '../styles/pages/Homepage.css';


const HomePage = () => {
  return (
    <div className="link-container">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={'logoKaKao.png'} alt="로고" className="logo" />
        </Link>
      </div>
      <div className="link-wrapper">
        <Link to="/signup">회원가입</Link>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default HomePage;
