import Carousel from "../components/atoms/Carousel";
import ShopCardList from "../components/organisms/ShopCardList";

const MainPage = () => {

    return (
        <div>
            <Carousel height='300px'/>
            <div className="max-w-screen-lg my-4 m-auto">
                <ShopCardList/>
            </div>
        </div>
    );
}

export default MainPage;
