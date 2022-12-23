import React from 'react';
import { BsTrash } from 'react-icons/bs';
import styles from './Item.module.css';

export default function Item({ todo, onDelete }) {
  const handleDelete = (e) => {
    onDelete(todo);
  };
  return (
    <li className={styles.item}>
      <span>
        <label form="checkBox" className={styles.item__checkbox}>
          <input
            className={styles.checkbox__default}
            type={'checkbox'}
            id="checkBox"
            name="checkBox"
          />
          <span
            className={`${styles.checkbox__new} ${styles.checkbox__new_bg}`}
          ></span>
          <span className={styles.todoItem}>{todo.todoItem}</span>
        </label>
      </span>

      <button onClick={handleDelete}>
        <BsTrash className={styles.trashIcon} />
      </button>
    </li>
  );
}
