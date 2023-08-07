import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import styles from "./ProductInformationColumn.module.css";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductInformaionColumn = ({ product }) => {
    const { productName, price, image } = product;
    return (
        <div className={styles.product_information_column}>
            <div className={styles.image_section}>
                <Photo 
                    className={styles.product_image} 
                    src={
                        staticServerUri ?
                        staticServerUri + image
                        :
                        `${process.env.REACT_APP_API_URL}${image.substr(1)}`} 
                    alt={`상품 이미지 - ${productName}`} />
            </div>
            <div className={styles.info_section}>
                <h1 className={styles.product_name}>{productName}</h1>
                <button className={styles.price}>톡딜가 {comma(price)}원~</button>
            </div>

        </div>
    )
}

export default ProductInformaionColumn;