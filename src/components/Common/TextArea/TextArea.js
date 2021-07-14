import React from 'react';
import styles from './TextArea.module.scss';

const TextArea = ({ label, placeholder, onChange, rows = '3', ...props }) => (
  <div className={styles.textArea}>
    {label && <p className={styles.textAreaLabel}>{label}</p>}
    <textarea onChange={onChange} placeholder={placeholder} rows={rows} {...props} />
  </div>
);

export default TextArea;
