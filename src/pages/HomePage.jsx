// components
import Carousel from '../components/week1_component/Carousel/Carousel';
import MainProductTemplate from '../components/templates/MainProductTemplate';
import { Suspense } from 'react';
import SkeletonGrid from '../components/organisms/SkeletonGrid';

const HomePage = () => {
    const carousel_items = [
        `${process.env.PUBLIC_URL}\carouselItem1.jpeg`,
        `${process.env.PUBLIC_URL}\carouselItem2.jpeg`,
        `${process.env.PUBLIC_URL}\carouselItem3.jpeg`,
    ];

    return (
        <div>
            <Carousel items={carousel_items}/>
            <Suspense fallback={<SkeletonGrid />}>
                <MainProductTemplate />
            </Suspense>
        </div>
    );
}

export default HomePage;