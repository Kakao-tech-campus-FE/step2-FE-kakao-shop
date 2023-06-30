import React, {
  createContext, useContext, useEffect, useReducer, useState,
} from 'react';
import styles from '../styles/toast.module.css';

const ToastContext = createContext<IToastData[] | null>(null);
const ToastDispatchContext = createContext<React.Dispatch<TypeActionData> | null>(null);

export function useToastContext() {
  const toasts = useContext(ToastContext);
  if (!toasts) {
    throw new Error('Cannot find ToastProvider!');
  }

  const toastDispatch = useContext(ToastDispatchContext);
  if (!toastDispatch) {
    throw new Error('Cannot find ToastProvider!');
  }

  return { toasts, toastDispatch };
}

interface IToastData {
  id: number;
  toastPosition: string;
  toastMsg: string;
  duration: number;
}

interface IToastProps {
  id: number;
  toastMsg: string;
  duration: number;
}

function Toast({
  id,
  toastMsg,
  duration,
}: IToastProps) {
  const { toastDispatch } = useToastContext();
  const [closeTimer, setCloseTimer] = useState(duration);
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  useEffect(() => {
    if (closeTimer > 0) {
      const intervalId = setInterval(() => {
        setCloseTimer((prev) => prev - 100);
      }, 100);

      return () => clearInterval(intervalId);
    }

    setShowing(false);

    return () => {};
  }, [closeTimer]);

  useEffect(() => {
    if (!showing) {
      const timeoutId = setTimeout(() => {
        toastDispatch({
          type: 'deleted',
          id,
        });
      }, 200);

      return () => clearTimeout(timeoutId);
    }

    return () => {};
  }, [showing]);

  return (
    <div className={`${styles.toast} ${showing ? styles.toastShowing : ''}`}>
      <div className={styles.toastMsgContainer}>
        <div className={styles.toastMsg}>
          {toastMsg}
        </div>
        <div>
          <button
            className={styles.toastCloseButton}
            type="button"
            onClick={() => setShowing(false)}
          >
            <span className="material-symbols-outlined">
              close
            </span>
          </button>
        </div>
      </div>
      <div
        className={styles.toastProgressBar}
        style={{
          animationDuration: `${duration}ms`,
        }}
      />
    </div>
  );
}

type TypeActionData = {
  type: 'added';
  id: number;
  toastPosition: string;
  toastMsg: string;
  duration: number;
} | {
  type: 'deleted';
  id: number;
};

function toastReducer(toasts: IToastData[], action: TypeActionData) {
  switch (action.type) {
    case 'added': {
      return [...toasts, {
        id: action.id,
        toastPosition: action.toastPosition,
        toastMsg: action.toastMsg,
        duration: action.duration,
      }];
    }

    case 'deleted': {
      return toasts.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error('Unknown action');
    }
  }
}

export default function ToastProvider({ children }: { children: React.ReactNode; }) {
  const [toasts, dispatch] = useReducer(
    toastReducer,
    [],
  );

  return (
    <ToastContext.Provider value={toasts}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
        <div className={`${styles.toastContainer} ${styles.topLeft}`}>
          {toasts.map((toast) => (
            toast.toastPosition === 'top-left' && (
            <Toast
              key={toast.id}
              id={toast.id}
              toastMsg={toast.toastMsg}
              duration={toast.duration}
            />
            )
          ))}
        </div>
        <div className={`${styles.toastContainer} ${styles.topRight}`}>
          {toasts.map((toast) => (
            toast.toastPosition === 'top-right' && (
            <Toast
              key={toast.id}
              id={toast.id}
              toastMsg={toast.toastMsg}
              duration={toast.duration}
            />
            )
          ))}
        </div>
        <div className={`${styles.toastContainer} ${styles.bottomLeft}`}>
          {toasts.map((toast) => (
            toast.toastPosition === 'bottom-left' && (
            <Toast
              key={toast.id}
              id={toast.id}
              toastMsg={toast.toastMsg}
              duration={toast.duration}
            />
            )
          ))}
        </div>
        <div className={`${styles.toastContainer} ${styles.bottomRight}`}>
          {toasts.map((toast) => (
            toast.toastPosition === 'bottom-right' && (
            <Toast
              key={toast.id}
              id={toast.id}
              toastMsg={toast.toastMsg}
              duration={toast.duration}
            />
            )
          ))}
        </div>
      </ToastDispatchContext.Provider>
    </ToastContext.Provider>
  );
}
