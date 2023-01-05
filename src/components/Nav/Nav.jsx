import { BsFillMoonFill } from 'react-icons/bs';
import React from 'react';
import styles from './Nav.module.css';

export default function Nav({ filters, filter, onFilterChange }) {
  return (
    <nav className={styles.nav}>
      <button>
        <BsFillMoonFill className={styles.icon} />
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
