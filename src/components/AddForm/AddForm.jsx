import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import styles from './AddForm.module.css';

export default function AddForm({ onAdd }) {
  const [text, setText] = useState('');
  const handleAdd = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'Active' });
    setText('');
  };

  return (
    <form className={styles.footer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleAdd}
        className={styles.input}
        placeholder="Add Todo"
      />
      <button className={styles.btn}>Add</button>
    </form>
  );
}
