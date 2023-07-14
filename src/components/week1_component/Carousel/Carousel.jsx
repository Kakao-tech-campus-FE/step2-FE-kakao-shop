import './Carousel.css';
import React, { useState, useEffect } from "react";

function Carousel({items}) {
    const N = items.length;
    const [current, setCurrent] = useState(0);

    let carousel_items = new Array(N);
    for(let i=0; i<N; i++){
        carousel_items[i] = (
        <div className="carousel-item">
            <img src={items[i]} key={i}></img>
        </div>
        );
    }

    let navs = new Array(N);
    for(let i=0; i<N; i++){
        navs[i] = (
            <div className={`carousel-nav-btn ${i===current ? "active" : ""}`}></div>
        );
    }

    // console.log(carousel_items);
    return (
        <>
            <div className="carousel-container">
                <div className="carousel-item-container" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {carousel_items}
                </div>
                <button className="carousel-btn prev" onClick={handlePrevBtn}></button>
                <button className="carousel-btn next" onClick={handleNextBtn}></button>
                <div className="carousel-nav">
                    {navs}
                </div>
            </div>
        </>
    );
    
    function handlePrevBtn(){
        setCurrent((current + N - 1) % N);
        
    }
    function handleNextBtn(){
        setCurrent((current + 1) % N);
    }
}

export default Carousel;