import { useState } from 'react';
import './Carousel.css';
import photo1 from '../assets/IMG_9046.JPG';
import photo2 from '../assets/IMG_9047.JPG';
import photo3 from '../assets/IMG_9048.JPG';
import photo4 from '../assets/IMG_9049.JPG';

const photos = [
  {
    id: 'p1',
    title: 'photo1',
    url: photo1,
  },
  {
    id: 'p2',
    title: 'photo2',
    url: photo2,
  },
  {
    id: 'p3',
    title: 'photo3',
    url: photo3,
  },
  {
    id: 'p4',
    title: 'photo4',
    url: photo4,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <div className="slider-container">
        {photos.map((photo, index) => (
          <div key={photo.id} className={index === currentIndex ? 'fade' : 'slide fade'}>
            <img src={photo.url} alt={photo.title} className="photo" />
            <div className="caption">{photo.title}</div>
          </div>
        ))}
        <button onClick={prev} className="prev">
          &lt;
        </button>
        <button onClick={next} className="next">
          &gt;
        </button>
      </div>
      <div className="dots">
        {photos.map((photo, index) => (
          <span
            key={photo.id}
            className={`dot ${index === currentIndex && 'active'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
