import React from 'react';
import Item from '../Item/Item';
import styles from './Items.module.css';

export default function Items({ todo, onDelete, onUpdate }) {
  return (
    <ul className={styles.contents}>
      {todo.map((t) => (
        <Item key={t.id} todo={t} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </ul>
  );
}
