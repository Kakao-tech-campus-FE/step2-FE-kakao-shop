import {Link} from "react-router-dom";

const ProductCard = ({id, title, description, image, link, price}) => {
    return (
        <div id={id} className="w-72 ml-5 mb-7">
            <Link to={link}>
                <div className="card__image">
                    <img className="w-full h-40 object-cover rounded-2xl" src={process.env.REACT_APP_API_URL + image}
                         alt={title}/>
                </div>
                <div className="my-2">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <h3>{price}원</h3>
                </div>
            </Link>
        </div>

    );
}

export default ProductCard;