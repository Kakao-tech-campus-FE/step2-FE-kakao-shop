import { AxiosError } from 'axios';
import { Fragment, PropsWithChildren, ReactElement } from 'react';

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

  return <Fragment>{children}</Fragment>;
};

export default CustomSuspense;
