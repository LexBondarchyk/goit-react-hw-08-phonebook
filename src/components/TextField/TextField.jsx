import React from 'react';
import { nanoid } from 'nanoid';
import styles from './textField.module.scss';

const TextField = ({ label, handelCtenge, ...props }) => {
  const id = nanoid();
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.lable}>
        {label}
      </label>
      <input
        id={id}
        onChange={handelCtenge}
        {...props}
        className={styles.input}
      />
    </div>
  );
};

export default TextField;
