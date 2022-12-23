import React, { useState } from 'react';
import styles from './App.module.css';
import Items from './components/Items/Items';
import AddForm from './components/AddForm/AddForm';
import Nav from './components/Nav/Nav';

export default function App() {
  const [todo, setTodo] = useState([]);

  const handleTodoItem = (todoItem) => {
    setTodo((prev) => [...todo, { id: Date.now(), todoItem }]);
  };

  const handleDelete = (todoItem) => {
    setTodo((prev) => todo.filter((t) => t.id !== todoItem.id));
  };

  return (
    <div className={styles.app}>
      <Nav />
      <Items todo={todo} onDelete={handleDelete} />
      <AddForm onTodoItem={handleTodoItem} />
    </div>
  );
}
