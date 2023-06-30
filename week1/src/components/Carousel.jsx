import { useState, React } from "react";
import styles from "../css/Carousel.module.css";



const Carousel = () => {
    const [Carousel, setCarousel] = useState(false);

    return (
        <div className={styles.carouselDiv}>
            <h2 className={styles.h2}>3. 캐러셀 구현</h2>
            <ul className={styles.carouselUl}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
            <div className={styles.carouselBtn}>
                <button>prev</button>
                <button>next</button>
            </div>
        </div >
    )
}

export default Carousel;