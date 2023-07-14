import styles from "./Photo.module.css";

const Photo = ({ className, src, alt }) => {
    return (
        <picture className={`${styles.photo} ${className}`}>
            <source srcSet={src} />
            <img src={src} alt={alt} />
        </picture>
    )
}

export default Photo;