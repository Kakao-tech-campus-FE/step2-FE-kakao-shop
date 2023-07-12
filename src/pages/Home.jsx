// components
import Carousel from '../components/week1_component/Carousel';

export default function Home() {

  const carousel_items = [
    `${process.env.PUBLIC_URL}\carouselItem1.jpeg`,
    `${process.env.PUBLIC_URL}\carouselItem2.jpeg`,
    `${process.env.PUBLIC_URL}\carouselItem3.jpeg`,
  ];

    return (
        <div className="home">
            <div className="home-body">
              <Carousel items={carousel_items}/>
            </div>
        </div>
    );
}