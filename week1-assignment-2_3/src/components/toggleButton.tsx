import React, { useState } from 'react';
import styles from '../styles/toggleButton.module.css';

export default function ToggleButton() {
  const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <div>
      <div className="demo-category-title">
        Toggle button
      </div>
      <div className="demo-category">
        <button
          type="button"
          className={`${styles.toggleButton} ${toggleStatus ? styles.toggleTrue : styles.toggleFalse}`}
          onClick={() => setToggleStatus((prev) => !prev)}
        >
          <div className={styles.toggleSwitch} />
        </button>
        <br />
        <div>
          toggleStatus:
          {' '}
          {toggleStatus.toString()}
        </div>
      </div>
    </div>
  );
}
