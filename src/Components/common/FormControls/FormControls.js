import React from 'react';
import styles from './FormControls.module.scss';

export const Textarea = ({ input, meta, ...props }) => {

  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formСontrol + ' ' + (hasError ? styles.error : '')}>
      <div className={styles.formDirection}>
        <textarea {...input} {...props} />
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formСontrol + ' ' + (hasError ? styles.error : '')}>
      <div className={styles.formDirection}>
        <input {...input} {...props} />
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};
