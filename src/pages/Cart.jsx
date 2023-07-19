import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import { useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import { getProductById } from '../services/product';
import OptionColum from "../components/organisms/OptionColum";


const Cart = () => {
   
    return (
        <div>
           장바구니
        </div>
    );
};

export default Cart;