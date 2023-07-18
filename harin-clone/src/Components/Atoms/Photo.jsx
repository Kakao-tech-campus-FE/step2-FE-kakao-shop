import { instance } from "../../Servicies";
import { getImage } from "../../Servicies/product";
import productSlice from "../../Store/Slices/productSlice";

const Photo = ({ src, alt }) => {
  return (
    <picture className="w-100px">
      <img className="p-4" src={process.env.REACT_APP_API_URL + src} alt={alt} />
    </picture>
  )
}

export default Photo;