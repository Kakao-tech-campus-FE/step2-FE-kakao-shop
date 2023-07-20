import styles from "./Container.module.css";

// children : container에 삽입할 요소
const Container = ({ children, className="" }) => {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}

export default Container;