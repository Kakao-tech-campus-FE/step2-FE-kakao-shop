import { useState, React } from "react";
import styles from "../css/Carousel.module.css";



const Carousel = () => {
    let list = 0;
    const [Carousel, setCarousel] = useState(0);


    const nextBtn = () => {
        setCarousel(() => {
            if (list === 3) {
                return 0;
            } else {
                return list + 1;
            }
        });
    };

    const prevBtn = () => {
        setCarousel(() => {
            if (list === 0) {
                return list - 1;
            } else {
                return list - 1;
            }
        });
    };


    return (
        <div className={styles.carouselDiv}>
            <h2 className={styles.h2}>3.. 캐러셀 구현</h2>
            <ul className={styles.carouselUl}>
                <li className={`${styles.carouselSlide} ${Carousel === 1 ? styles.active : ''}`}>1</li>
                <li className={`${styles.carouselSlide} ${Carousel === 2 ? styles.active : ''}`}>2</li>
                <li className={`${styles.carouselSlide} ${Carousel === 3 ? styles.active : ''}`}>3</li>
            </ul>
            <div className={styles.carouselBtn}>
                <button onClick={prevBtn}>prev</button>
                <button onClick={nextBtn}>next</button>
            </div>
        </div >
    )
}

export default Carousel;