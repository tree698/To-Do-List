import React, { useState } from 'react';
import Items from './components/Items/Items';
import Nav from './components/Nav/Nav';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Nav filters={filters} filter={filter} onFilterChange={setFilter} />
      <Items filter={filter} />
    </DarkModeProvider>
  );
}
