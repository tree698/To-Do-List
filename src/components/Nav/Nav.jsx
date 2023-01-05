import { HiMoon, HiSun } from 'react-icons/hi';
import React from 'react';
import styles from './Nav.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Nav({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={styles.nav}>
      <button onClick={toggleDarkMode}>
        {!darkMode && <HiMoon className={styles.icon} />}
        {darkMode && <HiSun className={styles.icon} />}
      </button>
      <ul className={styles.menu__container}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.menu} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
