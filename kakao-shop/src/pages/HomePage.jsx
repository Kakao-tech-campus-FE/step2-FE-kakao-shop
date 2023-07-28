import MainProductTemplate from "../components/templates/MainProductTemplate";
import Photo from "../components/atoms/Photo";

/**
 * 쇼핑하기 사이트의 메인 페이지
 *
 * @returns {JSX.Element} - 메인 페이지의 JSX 요소
 */
const HomePage = () => {
  return (
    <div className="home-page">
      {/* 추후 캐러셀로 변경 */}
      <section className="main-banner">
        <Photo src="carouselItem1.jpeg" alt="메인 배너" />
      </section>
      <section className="main-content">
        <MainProductTemplate />
      </section>
    </div>
  );
};

export default HomePage;
