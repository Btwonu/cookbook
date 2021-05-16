import { useState } from 'react';

const Auth = () => {
  const [selectedForm, setSelectedForm] = useState('login');

  if (selectedForm === 'login') {
    return (
      <div className="container flex flex-col items-center border">
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

        <form className="flex flex-col w-10/12">
          <label className="visually-hidden" htmlFor="login-username">
            Username
          </label>
          <input
            type="text"
            name="login-username"
            id="login-username"
            className="login-input p-1.5 mb-6"
            placeholder="Username"
          />

          <label className="visually-hidden" htmlFor="login-password">
            Password
          </label>
          <input
            type="password"
            name="login-password"
            id="login-password"
            className="login-input p-1.5 mb-6"
            placeholder="Password"
          />
          <button className="btn">Login</button>
        </form>
      </div>
    );
  } else if (selectedForm === 'register') {
    return (
      <div className="container flex flex-col items-center border">
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

        <form className="flex flex-col w-10/12">
          <label className="visually-hidden" htmlFor="register-username">
            Username
          </label>
          <input
            type="text"
            name="register-username"
            id="register-username"
            className="register-input p-1.5 mb-6"
            placeholder="Username"
          />

          <label className="visually-hidden" htmlFor="register-email">
            Email
          </label>
          <input
            type="email"
            name="register-email"
            id="register-email"
            className="register-input p-1.5 mb-6"
            placeholder="Email"
          />

          <label className="visually-hidden" htmlFor="register-password">
            Password
          </label>
          <input
            type="password"
            name="register-password"
            id="register-password"
            className="register-input p-1.5 mb-6"
            placeholder="Password"
          />

          <label className="visually-hidden" htmlFor="register-confirm">
            Confirm Password
          </label>
          <input
            type="password"
            name="register-confirm"
            id="register-confirm"
            className="register-input p-1.5 mb-6"
            placeholder="Confirm Password"
          />
          <button className="btn">Register</button>
        </form>
      </div>
    );
  }
};

export default Auth;
