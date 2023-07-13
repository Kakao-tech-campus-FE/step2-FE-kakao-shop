import React from "react";
import logoKakao from '../img/logoKakao.png';
import '../pages.css/HomePage.css';


function HomePage() {
  return (
    <nav>
      <ul className="navigation-bar">
        <a href="/">
          <img src={logoKakao} alt="Logo"/>
        </a>
        <a href="/login">로그인</a>
        <a href="/signup">회원가입</a>
      </ul>
    </nav>
  );
}

// const HomePage =()=> {
//   return 

//   <div>메인페이지</div>
//   NavigationBar

// }


export default HomePage;


// export default HomePage