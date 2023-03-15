import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import styles from './registerPage.module.scss';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handelSingup = data => {
    dispatch(signup(data));
  };
  return (
    <div className={styles.sectionRegister}>
      <div className={styles.container}>
        <h2 className={styles.title}>Register Form</h2>
        <RegisterForm onSubmit={handelSingup} />
        <p className={styles.signin}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
