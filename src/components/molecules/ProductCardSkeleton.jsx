import { styled } from 'styled-components';
import Card from '../atoms/Card';
import SkeletonItem from '../atoms/SkeletonItem';

const ProductCardSkeleton = () => {
    return (
        <CardSkeleton>
            <ImageSkeleton />
            <NameSkeleton />
            <PriceSkeleton />
        </CardSkeleton>
    );
};

const CardSkeleton = styled(Card)`
    cursor: default;
`;

const ImageSkeleton = styled(SkeletonItem)`
    height: 200px;
    width: 200px;
    border-radius: ${({ theme }) => theme.border.rad_base};
`;

const NameSkeleton = styled(SkeletonItem)`
    width: 200px;
    height: 60px;
`;
const PriceSkeleton = styled(SkeletonItem)`
    width: 200px;
    height: 20px;
`;

export default ProductCardSkeleton;
