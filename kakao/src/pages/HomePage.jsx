import MainProductTemplate from "../components/templates/MainProductTemplate";

const HomePage = () => {
  return (
    <div className="homepage">
      <img
        src="carouselItem2.jpeg"
        alt="메인 캐로셀 이미지"
        style={{ width: "100vw" }}
      />
      <MainProductTemplate />
    </div>
  );
};
export default HomePage;
