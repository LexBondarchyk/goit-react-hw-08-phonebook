export const isUserLogin = ({ auth }) => auth.isLogin;
export const getEmail = ({ auth }) => auth.user.email;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
