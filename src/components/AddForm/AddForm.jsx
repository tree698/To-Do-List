import React, { useRef } from 'react';
import styles from './AddForm.module.css';

export default function AddForm({ onTodoItem }) {
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoItem = inputRef.current.value;
    todoItem && onTodoItem(todoItem);
    inputRef.current.value = '';
  };

  return (
    <form className={styles.footer} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Add Todo"
      />
      <button className={styles.btn}>Add</button>
    </form>
  );
}
