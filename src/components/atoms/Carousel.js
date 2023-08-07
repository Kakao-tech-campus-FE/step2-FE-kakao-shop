import { useState, useEffect } from "react";

export default function Carousel({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const prevImage = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 1000 * 3);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="relative">
      <img
        src={images[selectedIndex]}
        alt={"carouselItem" + (selectedIndex + 1)}
      />
      <p className="absolute top-[85%] w-full space-x-2 text-xs text-white font-bold">
        {images.map((_, idx) => (
          <span
            key={`c-p-${idx}`}
            className={idx === selectedIndex ? null : "opacity-30"}
          >
            ●
          </span>
        ))}
      </p>
      <div className="absolute top-[50%] translate-y-[-50%] w-full px-[7%] flex justify-between">
        {["<", ">"].map((val, idx) => (
          <button
            key={`c-b-${idx}`}
            className="w-[3rem] h-[3rem] rounded-full bg-[#fff3] shadow-lg"
            onClick={val === "<" ? prevImage : nextImage}
          >
            <p className="translate-y-[-10%] text-3xl text-[#fff]">{val}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
