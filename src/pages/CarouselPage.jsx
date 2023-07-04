import Carousel from '../components/carousel/Carousel';
import SlideImg1 from '../assets/images/img1.jpg';
import SlideImg2 from '../assets/images/img2.jpg';
import SlideImg3 from '../assets/images/img3.jpg';
import SlideImg4 from '../assets/images/img4.jpg';
import SlideImg5 from '../assets/images/img5.jpg';
import SlideImg6 from '../assets/images/img6.jpg';

const images = {
    img: [SlideImg1, SlideImg2, SlideImg3, SlideImg4, SlideImg5, SlideImg6],
};

const CarouselPage = () => {
    return (
        <>
            <h2>Carousel</h2>
            <Carousel data={images} />
        </>
    );
};

export default CarouselPage;
