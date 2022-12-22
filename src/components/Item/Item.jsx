import React from 'react';
import { BsTrash } from 'react-icons/bs';
import styles from './Item.module.css';

export default function Item({ todoItem, onDelete }) {
  const handleDelete = (e) => {
    onDelete(todoItem);
  };
  return (
    <li className={styles.item}>
      <span>
        <input
          className={styles.checkBox}
          type={'checkbox'}
          id="checkBox"
          name="checkBox"
        />
        <label form="checkBox" className={styles.todoItem}>
          {todoItem}
        </label>
      </span>
      <button onClick={handleDelete}>
        <BsTrash className={styles.trashIcon} />
      </button>
    </li>
  );
}
