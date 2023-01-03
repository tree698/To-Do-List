import React from 'react';
import { BsTrash } from 'react-icons/bs';
import styles from './Item.module.css';

export default function Item({ todo, onDelete, onUpdate }) {
  const handleDelete = (e) => {
    onDelete(todo);
  };

  const handleOnUpdate = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const { todoItem, status } = todo;

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        id="text"
        checked={status === 'completed'}
        onChange={handleOnUpdate}
      />
      <label htmlFor="text">{todoItem}</label>
      <button onClick={handleDelete}>
        <BsTrash className={styles.trashIcon} />
      </button>
    </li>
  );
}
