import React, { useState } from 'react';
import styles from './AddForm.module.css';

export default function AddForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    onAdd(text);
    setText('');
  };

  const handleAdd = (e) => setText(e.target.value);

  return (
    <form className={styles.footer} onSubmit={handleSubmit}>
      <input
        type="text"
        id="text"
        name="text"
        value={text}
        onChange={handleAdd}
        className={styles.input}
        placeholder="Add Todo"
      />
      <button className={styles.btn}>Add</button>
    </form>
  );
}
