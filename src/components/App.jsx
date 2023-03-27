import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/user/operations';
import { Layout } from './Layout/Layout';

const Homepage = lazy (() => import ("pages/Homepage/Homepage"));
const Loginpage = lazy(() => import("../pages/Login/Login"));
const Registerpage = lazy(() => import('../pages/Register/Register'));
const Contactspage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const {isRefreshing} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<p>Refreshing user...</p>) : (
		<div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="contacts" element={<Contactspage />} />
			 
        </Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
	 );
};
