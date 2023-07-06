import React, {
  useEffect, useState,
} from 'react';
import styles from '../styles/toast.module.css';
import { useToastContext } from './toastContext';
import { TOAST_DELETE_TIMEOUT, TOAST_TIMER_INTERVAL } from '../utils/common';

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setShowing(true);
      setIsMounted(true);
    } else if (!showing) {
      const timeoutId = setTimeout(() => {
        toastDispatch({
          type: 'deleted',
          id,
        });
      }, TOAST_DELETE_TIMEOUT);

      return () => clearTimeout(timeoutId);
    }

    return () => {};
  }, [showing]);

  useEffect(() => {
    if (closeTimer > 0) {
      const intervalId = setInterval(() => {
        setCloseTimer((prev) => prev - TOAST_TIMER_INTERVAL);
      }, TOAST_TIMER_INTERVAL);

      return () => clearInterval(intervalId);
    }

    setShowing(false);

    return () => {};
  }, [closeTimer]);

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
