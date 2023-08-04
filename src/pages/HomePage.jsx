// components
import Carousel from '../components/week1_component/Carousel/Carousel';
import MainProductTemplate from '../components/templates/MainProductTemplate';
import { Suspense } from 'react';
import SkeletonGrid from '../components/organisms/SkeletonGrid';

const staticServerUri = process.env.REACT_APP_PATH || "";

const HomePage = () => {
    const carousel_items = [
        staticServerUri + "/carouselItem1.jpeg",
        staticServerUri + "/carouselItem2.jpeg",
        staticServerUri + "/carouselItem3.jpeg",
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