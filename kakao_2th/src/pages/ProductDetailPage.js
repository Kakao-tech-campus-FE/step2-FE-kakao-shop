import { useParams } from "react-router-dom"

const ProductDetailPage = () => {
    const { id } = useParams();
    const parseId = parseInt(id, 10)

    return (
        <div>
            <h1>Product Detail Page</h1>
        </div>
    )
}

export default ProductDetailPage