import MainProductTemplate from "../components/templates/MainProductTemplate";

/**
 * 선물하기 사이트의 메인 페이지
 *
 * @returns {JSX.Element} - 메인 페이지의 JSX 요소
 */
const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home page</h1>
      <MainProductTemplate />
    </div>
  );
};

export default HomePage;
