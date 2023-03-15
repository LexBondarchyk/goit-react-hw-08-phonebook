import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import items from './items';
import { isUserLogin } from 'redux/auth/auth-seloctor';

import styles from './navbarMenu.module.scss';

const NavbarMenu = () => {
  const isLogin = useSelector(isUserLogin);

  const filtredItems = !isLogin ? items.filter(item => !item.private) : items;

  const elements = filtredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export default NavbarMenu;
