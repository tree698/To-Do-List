import React, { useState } from 'react';
import Items from './components/Items/Items';
import Nav from './components/Nav/Nav';

const filters = ['All', 'Active', 'Completed'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  // const handleFilterChange = (filter) => {
  //   setFilter(filter);
  // };
  return (
    <>
      <Nav filters={filters} onFilterChange={setFilter} />
      <Items filter={filter} />
    </>
  );
}
