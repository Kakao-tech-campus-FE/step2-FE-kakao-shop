import Skeleton from "../molecules/Skeleton";
import styles from "./SkeletonGrid.module.css";

const SkeletonGrid = () => {

    return (
        <div className={styles.skeleton_grid}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    );
}

export default SkeletonGrid;