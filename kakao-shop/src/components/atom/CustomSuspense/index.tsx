import { PropsWithChildren, ReactElement } from 'react';

type Props = {
  fallback: ReactElement;
  isLoading: boolean;
};
const CustomSuspense = (props: PropsWithChildren<Props>) => {
  const { fallback, isLoading, children } = props;

  console.log(fallback);

  if (isLoading) {
    return fallback;
  }

  return <>{children}</>;
};

export default CustomSuspense;
