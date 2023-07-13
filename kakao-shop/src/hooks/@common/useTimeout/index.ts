import { useEffect } from 'react';

import { useTimeoutFn } from '@hooks/@common';

const useTimeout = (fn: () => void, ms: number) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};

export default useTimeout;
