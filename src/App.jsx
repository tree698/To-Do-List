import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Items from './components/Items/Items';
import AddForm from './components/AddForm/AddForm';
import Nav from './components/Nav/Nav';
import styles from './App.module.css';

export default function App() {
  const [todo, setTodo] = useState([]);

  const handleOnAdd = (todoItem) => {
    setTodo((prev) => [...todo, { id: uuidv4(), todoItem, status: 'active' }]);
  };

  const handleDelete = (todoItem) => {
    setTodo((prev) => todo.filter((t) => t.id !== todoItem.id));
  };

  return (
    <div className={styles.app}>
      <Nav />
      <Items todo={todo} onDelete={handleDelete} />
      <AddForm onAdd={handleOnAdd} />
    </div>
  );
}
