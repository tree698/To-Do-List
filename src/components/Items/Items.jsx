import React, { useState } from 'react';
import Item from '../Item/Item';
import AddForm from '../AddForm/AddForm';
import styles from './Items.module.css';

export default function Items({ filter }) {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (update) => {
    setTodos(todos.map((t) => (t.id === update.id ? update : t)));
  };
  const handleDelete = (todoItem) => {
    setTodos(todos.filter((t) => t.id !== todoItem.id));
  };

  const filtered = getFilteredItem(todos, filter);
  return (
    <section>
      <ul className={styles.contents}>
        {filtered.map((item) => (
          <Item
            key={item.id}
            todo={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddForm onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}
