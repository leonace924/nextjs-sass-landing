import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, type = 'text', placeholder, value, onChange, ...props }) => (
  <div className={styles.input}>
    <div className={styles.inputLabelWrapper}>
      {label && <p className={styles.inputLabel}>{label}</p>}
    </div>
    <input type={type} onChange={onChange} value={value} placeholder={placeholder} {...props} />
  </div>
);

export default Input;
