// import './Carousel.css';
import styles from "./Carousel.module.css";
import React, { useState } from "react";

function Carousel({items}) {
    const N = items.length;
    const [current, setCurrent] = useState(0);

    function handlePrevBtn(){
        setCurrent((current + N - 1) % N);
    }
    function handleNextBtn(){
        setCurrent((current + 1) % N);
    }

    return (
        <>
            <div className={styles.carousel_container}>
                <div className={styles.carousel_item_container} style={{ transform: `translateX(-${current * 100}%)` }}>
                    {items.map((item) => 
                        <div className={styles.carousel_item} key={item}>
                            <img src={item}></img>
                        </div>
                    )}
                </div>
                <button className={`${styles.carousel_btn} ${styles.prev}`} onClick={handlePrevBtn}></button>
                <button className={`${styles.carousel_btn} ${styles.next}`} onClick={handleNextBtn}></button>
                <div className={styles.carousel_nav}>
                    {items.map((item, i) => (
                        <div className={`${styles.carousel_nav_btn} ${i === current ? styles.active : ""}`} key={i}></div>
                    ))}
                </div>
            </div>
        </>
    );
    
    
}

export default Carousel;