import { useState, React } from "react";
import styles from "../../css/Carousel.module.css";



const Carousel = () => {
    let list = 0;
    const [Carousel, setCarousel] = useState(0);


    const nextBtn = () => {
        setCarousel(() => {
            if (list === 4) {
                list = 0;
                return 0;
            } else {
                list += 1;
                return list;
            }
        });
    };

    const prevBtn = () => {
        setCarousel(() => {
            if (list === 0) {

                return 0;
            } else {
                list += 1;
                return list - 1;
            }
        });
    };


    return (
        <div className={styles.carouselDiv}>
            <h2 className={styles.h2}>3. 캐러셀 구현</h2>
            <ul className={styles.carouselUl}>
                <li className={`${styles.carouselSlide} ${Carousel === 1 ? styles.active : ''} ${Carousel === 2 ? styles.active2 : ''} ${Carousel === 3 ? styles.active3 : ''}`}>1</li>
                <li className={`${styles.carouselSlide} ${Carousel === 1 ? styles.active : ''} ${Carousel === 2 ? styles.active2 : ''} ${Carousel === 3 ? styles.active3 : ''}`}>2</li>
                <li className={`${styles.carouselSlide} ${Carousel === 1 ? styles.active : ''} ${Carousel === 2 ? styles.active2 : ''} ${Carousel === 3 ? styles.active3 : ''}`}>3</li>
            </ul>
            <div className={styles.carouselBtn}>
                <button onClick={prevBtn}>prev</button>
                <button onClick={nextBtn}>next</button>
            </div>
        </div >
    )
}

export default Carousel;