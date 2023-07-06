import { useReducer } from 'react';
import styles from '../styles/toastProvider.module.css';
import Toast from './toast';
import { ToastContext, ToastDispatchContext } from './toastContext';
import { ToastData, TypeActionData } from '../types/toast';

function toastReducer(toasts: ToastData[], action: TypeActionData) {
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
