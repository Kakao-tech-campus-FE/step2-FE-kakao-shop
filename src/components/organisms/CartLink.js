// components
import ImageLink from "../molecules/ImageLink.js";

// images
import cart from "../../assets/images/icon/cart.png";

export default function KakaoLink() {
  return <ImageLink to="/cart" src={cart} alt="cart" />;
}
