import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import ProductGroup from "@/components/ProductList/ProductGroup.component";
import Carousel from "@/components/common/Carousel/Carousel.component";

const HomePage = () => {
  const carouselItems = [
    {
      src: "/carouselItem1.jpeg",
      alt: "carousel1",
    },
    {
      src: "/carouselItem2.jpeg",
      alt: "carousel2",
    },
    {
      src: "/carouselItem3.jpeg",
      alt: "carousel3",
    },
  ];

  return (
    <>
      <GlobalNavbar />
      <Carousel carouselItems={carouselItems} />
      <div className="m-auto max-w-7xl">
        <ProductGroup />
      </div>
    </>
  );
};

export default HomePage;
