import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import AddForm from '../AddForm/AddForm';
import styles from './Items.module.css';

export default function Items({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());

  // useEffect(() => {
  //   setTodos((todo) => readTodos());
  // }, []);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (update) => {
    setTodos(todos.map((t) => (t.id === update.id ? update : t)));
  };
  const handleDelete = (todoItem) => {
    setTodos(todos.filter((t) => t.id !== todoItem.id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItem(todos, filter);
  return (
    <section className={styles.items}>
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

function readTodos() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItem(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((t) => t.status === filter);
}
