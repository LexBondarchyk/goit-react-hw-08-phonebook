import React from 'react';

import useForm from 'hooks/useForm';
import fields from './fields';

import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';

import styles from './loginForm.module.scss';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
