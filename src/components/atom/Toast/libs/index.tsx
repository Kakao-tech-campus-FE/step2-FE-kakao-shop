import type { ComponentProps, FunctionComponent, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

import { DefaultToastItem } from './DefaultItem';
import Manager from './Manager';
import type { Options } from './types';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

class Toast {
  portal: HTMLElement | null = null;

  createToast: Parameters<ComponentProps<typeof Manager>['bind']>[0] | null = null;

  constructor(
    options: {
      ToastItem?: ComponentProps<typeof Manager>['ToastItem'];
    } = {},
  ) {
    // FunctionComponent<{ isShow, options, children }>
    const { ToastItem } = options;

    root.render(
      <Manager
        // bind 함수를 통해 토스트를 생성할 수 있는 함수를 Manager.tsx에서 받아온다.
        // createToast: (content: FunctionComponent<{}> | ReactNode, options: Options) => void
        bind={createToast => {
          this.createToast = createToast;
        }}
        ToastItem={ToastItem ?? DefaultToastItem}
      />,
    );
  }

  show(
    Content: ReactNode | FunctionComponent<{ options: Options }>,
    options: Options = { delay: 500, duration: 2000 },
  ) {
    const { delay = 500, duration = 2000 } = options;
    const content = typeof Content === 'function' ? <Content options={options} /> : Content;

    this.createToast?.(content, { delay, duration });
  }
}

export default Toast;
