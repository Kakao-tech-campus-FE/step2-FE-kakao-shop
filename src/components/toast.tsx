import React, {
  useEffect, useState,
} from 'react';
import styles from '../styles/toast.module.css';
import { useToastContext } from './toastContext';

interface ToastProps {
  id: number;
  toastMsg: string;
  duration: number;
}

export default function Toast({
  id,
  toastMsg,
  duration,
}: ToastProps) {
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
