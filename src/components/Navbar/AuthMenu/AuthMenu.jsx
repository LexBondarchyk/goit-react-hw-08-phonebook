import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './authMenu.module.scss';

const AuthMenu = () => {
  return (
    <div>
      <NavLink to={'/register'} className={styles.link}>
        Register
      </NavLink>{' '}
      |{' '}
      <NavLink to={'/login'} className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthMenu;
