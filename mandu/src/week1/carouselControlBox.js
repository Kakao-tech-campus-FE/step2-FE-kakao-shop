import Carousel from "../components/atoms/Carousel";

function CarouselControlBox() {
    //사진추가하는거넣기
    return (
        <div className="carousel-control-box">

            <h1>Carousel!</h1>
            <Carousel width='100%' height='300px'/>

        </div>
    );
}

export default CarouselControlBox;