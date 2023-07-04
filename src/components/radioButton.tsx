import React, { useState } from 'react';
import styles from '../styles/radioButton.module.css';

export default function RadioButton() {
  const [selected, setSelected] = useState('Rabbit');
  const radioValues = ['Rabbit', 'Dog', 'Cat'];

  return (
    <div>
      <div className="demo-category-title">
        Radio button
      </div>
      <div className="demo-category">
        <div>
          What is your favorite animal?
        </div>
        <br />
        <div>
          {radioValues.map((radioValue, index) => (
            <label
              key={`${`${radioValue}-${index}`}`}
              className={styles.radioLabel}
              htmlFor={`radio-${index}`}
            >
              <input
                type="radio"
                className={styles.radioButton}
                id={`radio-${index}`}
                name="favorite-animals"
                value={radioValue}
                onChange={(e) => setSelected(e.target.value)}
                defaultChecked={index === 0}
              />
              {radioValue}
            </label>
          ))}
        </div>
        <br />
        <div>
          Selected:
          {' '}
          {selected}
        </div>
      </div>
    </div>
  );
}
