import ProductSectionTemplate from "../components/templates/ProductSectionTemplate";
import CarouselSection from "../components/atoms/CarouselSection";

/** 메인 페이지
 *
 * @return {JSX.Element}
 */
const MainPage = () => {
  return (
    <div>
      <CarouselSection />
      <ProductSectionTemplate />
    </div>
  );
};

export default MainPage;
