import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import styles from "./ProductCard.module.css";
import Badge from "../atoms/Badge";

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
    return (
        <Card className={styles.card} to={`/product/${product.id}`}>
            <span>
                <Photo
                    className={`${styles.product_image} rounded-[8px]`}
                    src={
                        staticServerUri ?
                        staticServerUri + "/images" + product.image
                        :
                        `${process.env.REACT_APP_API_URL}${product.image.substr(1)}`
                    }
                    alt={product.productName} 
                />
            </span>
            <div className="pt-3">
                <div className="badge_group pb-[9px]">
                    <Badge>무료배송</Badge>
                </div>
                <p className={styles.product_name}>{product.productName}</p>
                <span className={styles.price}>
                    <em className={styles.em_talkspecial}>톡별가 </em>
                    {comma(product.price)} 원 부터~
                </span>
            </div>
        </Card>
    )
}

export default ProductCard;