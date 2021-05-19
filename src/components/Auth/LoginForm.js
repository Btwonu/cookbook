import { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setSelectedForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: '/auth/login',
      data: { username, password },
    })
      .then((res) => console.log(res.data))
      .catch(console.error);
  };

  return (
    // uncomment sections if you want form to be centered in the page
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
        id="login-form"
        className="flex flex-col w-10/12"
        onSubmit={handleSubmit}
      >
        <label className="visually-hidden" htmlFor="login-username">
          Username
        </label>
        <input
          type="text"
          name="login-username"
          id="login-username"
          className="login-input bg-light p-1.5 mb-6"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="visually-hidden" htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          className="login-input bg-light p-1.5 mb-6"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn">Login</button>
      </form>
    </div>
    // </section>
  );
};

export default LoginForm;
