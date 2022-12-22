import React from 'react';
import styles from './App.module.css';
import Items from './components/Items/Items';
import AddForm from './components/AddForm/AddForm';
import Nav from './components/Nav/Nav';

export default function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Items />
      <AddForm />
    </div>
  );
}
