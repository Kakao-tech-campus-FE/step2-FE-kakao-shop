const ProductImgInfo = ({img}) => {
    return (
        <div className="mx-8 w-96">
            <div className="h-96 border-2 overflow-hidden">
                <img src={process.env.REACT_APP_API_URL + img} alt=""/>
            </div>
        </div>
    );
}
export default ProductImgInfo;