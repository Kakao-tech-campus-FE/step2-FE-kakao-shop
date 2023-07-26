import styled from '@emotion/styled';

import Loader from '@components/atom/Loader';

const PageLoader = () => {
  return (
    <S.Root>
      <Loader />
    </S.Root>
  );
};

export default PageLoader;

const S = {
  Root: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: calc(100vh - 204px);
  `,
};
