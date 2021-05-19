import { useState } from 'react';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const AuthForm = () => {
  const [selectedForm, setSelectedForm] = useState('login');

  if (selectedForm === 'login') {
    return <LoginForm setSelectedForm={setSelectedForm} />;
  } else if (selectedForm === 'register') {
    return <RegisterForm setSelectedForm={setSelectedForm} />;
  }
};

export default AuthForm;
