import axios from 'axios';
import { useState } from 'react';

const RegisterForm = ({ setSelectedForm }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { username, email, password, confirmPassword };

    axios({
      method: 'POST',
      url: '/auth/register',
      data: credentials,
    })
      .then((res) => {
        console.log('User created');

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch(console.error);
  };

  return (
    // <section className="flex items-center h-full">
    <div className="bg-light flex flex-col flex-grow items-center border text-dark my-10 mx-auto pb-10 min-w-80 max-w-xs  sm:max-w-sm  md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      <fieldset className="w-full pb-8">
        <legend className="visually-hidden">Select Form:</legend>
        <button
          className="w-1/2 border p-2 bg-primary hover:bg-primaryHovered"
          onClick={() => setSelectedForm('login')}
        >
          Login
        </button>
        <button
          className="w-1/2 border p-2 bg-primary hover:bg-primaryHovered"
          onClick={() => setSelectedForm('register')}
        >
          Register
        </button>
      </fieldset>

      <form
        id="register-form"
        className="flex flex-col w-10/12"
        onSubmit={handleSubmit}
      >
        <label className="visually-hidden" htmlFor="register-username">
          Username
        </label>
        <input
          type="text"
          name="register-username"
          id="register-username"
          className="register-input bg-light p-1.5 mb-6"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="visually-hidden" htmlFor="register-email">
          Email
        </label>
        <input
          type="email"
          name="register-email"
          id="register-email"
          className="register-input bg-light p-1.5 mb-6"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="visually-hidden" htmlFor="register-password">
          Password
        </label>
        <input
          type="password"
          name="register-password"
          id="register-password"
          className="register-input bg-light p-1.5 mb-6"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="visually-hidden" htmlFor="register-confirm">
          Confirm Password
        </label>
        <input
          type="password"
          name="register-confirm"
          id="register-confirm"
          className="register-input bg-light p-1.5 mb-6"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="btn">Register</button>
      </form>
    </div>
    // </section>
  );
};

export default RegisterForm;
