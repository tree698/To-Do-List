import React from 'react';
import styles from './App.module.css';
import Contents from './components/Contents/Contents';
import Input from './components/Input/Input';
import Nav from './components/Nav/Nav';

export default function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Contents />
      <Input />
    </div>
  );
}
