import React, { useState } from 'react';
import { useToastContext } from './toast';
import styles from '../styles/toastDemo.module.css';

export default function ToastDemo() {
  const { toasts, toastDispatch } = useToastContext();
  const [toastMsg, setToastMsg] = useState('Hello, World!');
  const [toastPosition, setToastPosition] = useState('bottom-right');
  const toastPositionValues = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  const [toastDuration, setToastDuration] = useState(3000);

  const showToast = () => {
    toastDispatch({
      type: 'added',
      id: toasts.length > 0 ? toasts[toasts.length - 1].id + 1 : 0,
      toastPosition,
      toastMsg,
      duration: toastDuration,
    });
  };

  return (
    <div>
      <div
        style={{
          fontWeight: '700',
          fontSize: '2rem',
          margin: '2rem 1rem',
        }}
      >
        Toast
      </div>
      <div
        style={{
          margin: '1rem',
        }}
      >
        <div>
          <button
            type="button"
            onClick={() => showToast()}
          >
            Show toast
          </button>
        </div>
        <div style={{ fontWeight: '700', marginTop: '0.5rem' }}>
          Toast message:
          {' '}
          <input
            type="text"
            value={toastMsg}
            onChange={(e) => setToastMsg(e.target.value)}
          />
        </div>
        <div style={{ fontWeight: '700', marginTop: '0.5rem' }}>
          Toast position
        </div>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {toastPositionValues.map((value, index) => (
            <label
              key={`${`${value}-${index}`}`}
              className={styles.radioLabel}
              htmlFor={`toast-radio-${index}`}
            >
              <input
                type="radio"
                className={styles.radioButton}
                id={`toast-radio-${index}`}
                name="toast-position"
                value={value}
                onChange={(e) => setToastPosition(e.target.value)}
                defaultChecked={index === 3}
              />
              {value}
            </label>
          ))}
        </div>
        <div style={{ fontWeight: '700', marginTop: '0.5rem' }}>
          Toast duration(ms):
          {' '}
          <input
            type="number"
            value={toastDuration}
            onChange={(e) => setToastDuration(+e.target.value)}
            onBlur={(e) => {
              let num = +e.target.value;
              if (num < 500) {
                num = 500;
              }
              setToastDuration(num);
            }}
            min={500}
          />
        </div>
      </div>
    </div>
  );
}
