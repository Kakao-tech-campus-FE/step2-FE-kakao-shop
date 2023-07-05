import React, { useState } from "react";
import { CarouselWindow, CarouselContainer, CarouselButton } from "./style";

export default function Carousel() {
  const images = [
    {
      name: "react",
      url: "https://acaroom.net/sites/default/files/styles/blog_featured_adaptive/public/images/blogs/reactintroduction.png",
    },
    {
      name: "CSS",
      url: "https://images.velog.io/images/apro_xo/post/e39d8ea9-3e3c-41d4-9bea-2cf836541703/cssLogo.png",
    },
    {
      name: "HTML",
      url: "https://www.techfor.id/wp-content/uploads/2019/12/html.png",
    },
    {
      name: "JS",
      url: "https://images.velog.io/images/hanblueblue/post/3a0b0464-a4f4-44b9-820a-d14e47f98eec/js.png",
    },
  ];

  const [imageIndex, setImageIndex] = useState(1);

  const handlePrevBtn = () => {
    if (imageIndex > 1) {
      setImageIndex((prev) => prev - 1);
    }
  };

  const handleNextBtn = () => {
    if (imageIndex < images.length) {
      setImageIndex((prev) => prev + 1);
    }
  };

  return (
    <CarouselWindow>
      <CarouselButton onClick={handlePrevBtn}>&lt;</CarouselButton>
      <CarouselContainer index={imageIndex}>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={image.name}></img>
        ))}
      </CarouselContainer>
      <CarouselButton onClick={handleNextBtn}>&gt;</CarouselButton>
    </CarouselWindow>
  );
}
