import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import LoginForm from 'components/LoginForm/LoginForm';

import styles from './loginPage.module.scss';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handelLogin = data => {
    dispatch(login(data));
  };
  return (
    <div className={styles.sectionRegister}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <LoginForm onSubmit={handelLogin} />
        <p className={styles.register}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
