import { useState, useEffect } from "react";
//아래 파일 경로 고치기
import Carousel from "../components/atoms/Carousel";
import MainProductTemplate from "../components/templates2/MainProductTemplate";

function Main() {
    return (
        <>
            {/* 슬라이드 광고 */}
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"carouselItem1.jpeg"}
                        alt="carouselItem1.jpeg"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"carouselItem2.jpeg"}
                        alt="carouselItem2.jpeg"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={"carouselItem3.jpeg"}
                        alt="carouselItem3.jpeg"
                    />
                </Carousel.Item>
            </Carousel>

            {/* 판매 상품 */}
            <MainProductTemplate />
        </>
    );
}

export default Main;