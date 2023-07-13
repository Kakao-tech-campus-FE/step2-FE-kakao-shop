import React, { useState } from 'react';
import styles from '../styles/radioButton.module.css';

export default function RadioButton() {
  const [selected, setSelected] = useState('Rabbit');
  const radioValues = [
    { id: 1, name: 'Rabbit' },
    { id: 2, name: 'Dog' },
    { id: 3, name: 'Cat' },
  ];

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
          {radioValues.map(({ id, name }) => (
            <label
              key={id}
              className={styles.radioLabel}
              htmlFor={`radio-${id}`}
            >
              <input
                type="radio"
                className={styles.radioButton}
                id={`radio-${id}`}
                name="favorite-animals"
                value={name}
                onChange={(e) => setSelected(e.target.value)}
                defaultChecked={id === 1}
              />
              {name}
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
