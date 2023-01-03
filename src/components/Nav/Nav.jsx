import { BsFillMoonFill } from 'react-icons/bs';
import React from 'react';
import styles from './Nav.module.css';

export default function Nav({ filters, onFilterChange }) {
  // const handleClick = (e) => {
  //   onFilterChange(e.target.textContent);
  // };

  return (
    <nav className={styles.nav}>
      <button>
        <BsFillMoonFill className={styles.icon} />
      </button>
      <ul className={styles.menu__container}>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
