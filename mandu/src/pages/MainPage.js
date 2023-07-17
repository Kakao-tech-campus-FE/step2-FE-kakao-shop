import Carousel from "../components/atoms/Carousel";
import ShopCardList from "../components/organisms/ShopCardList";

const MainPage = () => {

    const imageUrlList = [
        './carouselItem1.jpeg',
        './carouselItem2.jpeg',
        './carouselItem3.jpeg',
    ]

    return (
        <div>
            <Carousel height='300px' imgList={imageUrlList}/>
            <div className="max-w-screen-lg my-4 m-auto">
                <ShopCardList/>
            </div>
        </div>
    );
}

export default MainPage;
