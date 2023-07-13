import MainProductTemplate from "../components/templates/MainProductTemplate";
import TestMain from "../components/templates/TestMain";

/**
 * 선물하기 사이트의 메인 페이지
 *
 * @returns {JSX.Element} - 메인 페이지의 JSX 요소
 */
const HomePage = () => {
  return (
    <div className="home-page">
      <section className="main-content">
        <div className="my-10">
          <h2 className="text-center text-4xl font-extrabold">
            오늘의 추천 아이템
          </h2>
          <p className="mt-2 text-center text-lg text-gray-500">
            카카오의 추천 아이템을 특가로 만나보세요
          </p>
        </div>
        {/* <MainProductTemplate /> */}
        <TestMain />
      </section>
    </div>
  );
};

export default HomePage;
