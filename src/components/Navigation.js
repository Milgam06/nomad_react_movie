import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <div className={styles.Nav}>
      <Link className={styles.toHome} to={'/'}>
        MILMOVIE
      </Link>
    </div>
  );
}

export default Navigation;
