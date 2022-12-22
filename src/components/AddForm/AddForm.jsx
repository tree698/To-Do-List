import React from 'react';
import styles from './AddForm.module.css';

export default function AddForm() {
  return (
    <form className={styles.footer}>
      <input type="text" className={styles.input} placeholder="Add Todo" />
      <button className={styles.btn}>Add</button>
    </form>
  );
}
