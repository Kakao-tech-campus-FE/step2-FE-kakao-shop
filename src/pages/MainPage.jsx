import MainCarousel from "../components/main/molecules/MainCarousel";
import MainProductTemplate from "../components/main/templates/MainProductTemplate";
import { CAROUSEL_IMAGES } from "../utils/constant";

export default function HomePage() {
  return (
    <div>
      <MainCarousel images={CAROUSEL_IMAGES} />
      <MainProductTemplate />
    </div>
  );
}
