import { Props } from './types';

import { FC } from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../main/MainPage';
import LoginForm from '../auth/SignInForm';

const Layout: FC<Props> = () => {
  return (
    <Routes>
      <Route path="*" element={<MainPage />} />
      <Route path="/auth" element={<LoginForm />} />
    </Routes>
  );
};

export default Layout;
