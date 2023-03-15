import { useSelector } from 'react-redux';

import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarAuth from './AuthMenu/AuthMenu';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './UserMenu/UserMenu';

import { isUserLogin } from 'redux/auth/auth-seloctor';

import styles from './navbar.module.scss';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={styles.navbarContainer}>
      <NavbarLogo />
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
};

export default Navbar;
