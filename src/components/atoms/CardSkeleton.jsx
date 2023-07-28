import * as Skeleton from '../../styles/molecules/CardSkeleton';

const CardSkeleton = () => {
    return (
        <div>
            <Skeleton.ImageLoader/>
            <Skeleton.DeliveryLoader />
            <Skeleton.TitleLoader />
            <Skeleton.PriceTextContainerLoader />
        </div>
    );
};

export default CardSkeleton;