import MainCarousel from "../components/main/molecules/MainCarousel";
import MainProductTemplate from "../components/main/templates/MainProductTemplate";
import { CAROUSEL_IMAGES } from "../utils/constant";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MainCarousel images={CAROUSEL_IMAGES} />
      <MainProductTemplate />
    </div>
  );
}
