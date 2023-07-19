import * as Skeleton from '../../styles/molecules/CardSkeleton';

const CardLoader = () => {
    return(
        <Skeleton.Container>
            {new Array(9).fill('').map((_, i) => (
                <div key={i}>
                    <Skeleton.ImageLoader/>
                    <Skeleton.DeliveryLoader />
                    <Skeleton.TitleLoader />
                    <Skeleton.PriceTextContainerLoader />
                </div>
            ))}

        </Skeleton.Container>
    );
};

export default CardLoader;