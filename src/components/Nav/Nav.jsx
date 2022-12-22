import { BsFillMoonFill } from 'react-icons/bs';
import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <button>
        <BsFillMoonFill className={styles.icon} />
      </button>
      <ul className={styles.menu__container}>
        <li>
          <button className={styles.menu}>All</button>
        </li>
        <li>
          <button className={styles.menu}>Active</button>
        </li>
        <li>
          <button className={styles.menu}>Completed</button>
        </li>
      </ul>
    </nav>
  );
}
