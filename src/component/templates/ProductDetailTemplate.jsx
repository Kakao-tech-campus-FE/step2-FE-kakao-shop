import Container from "../atoms/Container"
import ProductInformationColumn from "../molecules/ProductInformationColumn"
import OptionColumn from "../molecules/OptionColumn"


const ProductDetailTemplate=({product})=>{
    return(
        <Container className=" flex-row justify-center w-full min-w-[1280px] m-auto">
            <ProductInformationColumn product={product}/>
            <OptionColumn product={product}/>
        </Container>
        
    )
}

export default ProductDetailTemplate;