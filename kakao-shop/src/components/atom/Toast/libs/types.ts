import type { FunctionComponent, ReactNode } from 'react';

export type Toast = {
  id: string;
  content: FunctionComponent | ReactNode;
  options: Options;
};

export type Options = {
  duration: number;
  delay: number;
};
