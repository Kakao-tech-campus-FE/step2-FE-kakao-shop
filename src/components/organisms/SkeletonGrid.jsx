import Skeleton from "../atoms/Skeleton";
import styled from "styled-components";

const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
`;
const SkeletonGrid = () => {
  return (
    <Group>
      <Container>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Container>
    </Group>
  );
};

export default SkeletonGrid;
