import { Link } from 'react-router-dom';

import styles from './navbarLogo.module.scss';

function NavbarLogo() {
  return (
    <div>
      <Link to="/" className={styles.logo}>
        Phonebook
      </Link>
    </div>
  );
}

export default NavbarLogo;
