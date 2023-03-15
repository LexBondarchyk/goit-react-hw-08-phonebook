import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';
import { getEmail } from 'redux/auth/auth-seloctor';

import styles from './userMenu.module.scss';

const UserMenu = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span className={styles.email}>{email}</span>
      <button className={styles.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
