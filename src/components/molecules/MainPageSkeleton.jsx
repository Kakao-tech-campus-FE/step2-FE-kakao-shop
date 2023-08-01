import * as Skeleton from '../../styles/molecules/CardSkeleton';
import CardSkeleton from '../atoms/CardSkeleton';

const MainPageSkeleton = () => {
    return(
        <Skeleton.Container>
            {new Array(9).fill('').map((_, i) => (
                <div key={i}>
                    <CardSkeleton />
                </div>
            ))}

        </Skeleton.Container>
    );
};

export default MainPageSkeleton;