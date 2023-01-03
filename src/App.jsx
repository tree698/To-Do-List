import React, { useState } from 'react';
import Items from './components/Items/Items';
import Nav from './components/Nav/Nav';
import styles from './App.module.css';

const filters = ['All', 'Active', 'Completed'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  // const handleFilterChange = (filter) => {
  //   setFilter(filter);
  // };
  return (
    <div className={styles.app}>
      <Nav filters={filters} onFilterChange={setFilter} />
      <Items filter={filter} />
    </div>
  );
}
