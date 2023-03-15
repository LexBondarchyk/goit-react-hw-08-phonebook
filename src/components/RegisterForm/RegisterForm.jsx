import useForm from 'hooks/useForm';
import fields from './fields';

import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';

import styles from './registerForm.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        value={name}
        handelCtenge={handleChange}
        {...fields.name}
        required
      />
      <TextField
        value={email}
        handelCtenge={handleChange}
        {...fields.email}
        required
      />
      <TextField
        value={password}
        handelCtenge={handleChange}
        {...fields.password}
        required
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
