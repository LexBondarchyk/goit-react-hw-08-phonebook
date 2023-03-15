import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setTokin = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }

  instance.defaults.headers.authorization = '';
};

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setTokin(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setTokin(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setTokin(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setTokin();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/users/logout');
  setTokin();
  return data;
};

export default instance;
