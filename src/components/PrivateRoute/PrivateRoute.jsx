import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-seloctor';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);
  if (!isLogin && token) {
    return <div>...Loading</div>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
