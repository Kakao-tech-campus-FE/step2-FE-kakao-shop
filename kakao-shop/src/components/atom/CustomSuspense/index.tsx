import { AxiosError } from 'axios';
import { PropsWithChildren, ReactElement } from 'react';

type Props = {
  fallback: ReactElement;
  isLoading: boolean;
  error: AxiosError | null;
};
const CustomSuspense = (props: PropsWithChildren<Props>) => {
  const { fallback, isLoading, children, error } = props;

  if (error !== null) {
    throw error;
  }

  if (isLoading) {
    return fallback;
  }

  return <>{children}</>;
};

export default CustomSuspense;
