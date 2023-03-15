import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-seloctor';

import styles from './homePage.module.scss';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={styles.sectionHome}>
      <div className={styles.container}>
        <p className={styles.greeting}> Welcome 👋</p>
        <h1 className={styles.title}>Phonebook</h1>
        <div className={styles.containerLink}>
          {isLogin ? (
            <Link to="/contacts" className={styles.contacts}>
              Go to contacts
            </Link>
          ) : (
            <Link to="/login" className={styles.login}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
