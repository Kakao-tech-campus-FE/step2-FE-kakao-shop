import "../../styles/SkeletonCard.css"

const SkeletonCard = () => {
    return (
        <>  
            <div className="skeleton">
                <div className="skeleton-wrapper">
                    <div className="skeleton-image"></div>
                </div>
                <div className="skeleton-product-name"></div>
                <div className="skeleton-product-price"></div>
            </div>
        </>
    );
};

export default SkeletonCard;