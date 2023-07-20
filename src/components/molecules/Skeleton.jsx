import Card from "../atoms/Card";
import styles from "./Skeleton.module.css";

const Skeleton = () => {
    return (
        <Card className={styles.skeleton}>
            <div className={styles.shimmer_wrapper}>
                <div className={styles.shimmer}></div>
            </div>
            <div className={styles.skeleton_image}></div>
            <p className={styles.skeleton_name}>.</p>
            <p className={styles.skeleton_price}>.</p>
        </Card>
    )
}

export default Skeleton;