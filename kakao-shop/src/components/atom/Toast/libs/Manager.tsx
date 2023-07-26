import type { FunctionComponent, ReactNode, ReactElement } from 'react';
import { useEffect, useState, Fragment } from 'react';

import type { Options, Toast } from './types';

const Manager = ({
  bind,
  ToastItem,
}: {
  bind: (createToast: (content: Toast['content'], options: Toast['options']) => void) => void;
  ToastItem: FunctionComponent<{
    isShow: boolean;
    options: { duration: number; delay: number };
    children: ReactNode;
  }>;
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    // Toast.show 호출시 실행
    bind((content, options) => {
      setToasts(old => {
        if (old.length >= 3) return old;
        return [...old, { id: `${new Date().getTime()}`, content, options }];
      });
    });
  }, [bind]);

  return (
    <Fragment>
      {toasts.map(({ content, id, options }) => {
        const Content = content;

        return (
          <DoAfterDuration
            key={id}
            options={options}
            // 이미 생성된 토스트 컴포넌트를 제거한다.
            // 토스트가 사라지는 애니메이션 발생 후 옵션으로 지정된 delay 시간 이후에 실행
            onDelayedAfterDone={() => {
              setToasts(oldToasts => oldToasts.filter(toast => toast.id !== id));
            }}>
            {({ done }) => (
              <ToastItem options={options} isShow={!done}>
                {typeof Content === 'function' ? <Content /> : Content}
              </ToastItem>
            )}
          </DoAfterDuration>
        );
      })}
    </Fragment>
  );
};

export default Manager;

const DoAfterDuration = ({
  options,
  children,
  onDelayedAfterDone,
}: {
  options: Options;
  children: (options: { done: boolean }) => ReactElement;
  onDelayedAfterDone?: () => void;
  onDone?: () => void;
}) => {
  const [done, setDone] = useState(false);

  setTimeout(() => {
    setDone(true);
    setTimeout(() => {
      onDelayedAfterDone?.();
    }, options.delay);
  }, options.duration);

  return <Fragment>{children({ done })}</Fragment>;
};
