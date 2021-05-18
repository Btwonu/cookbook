import { useState } from 'react';

const AuthForm = () => {
  const [selectedForm, setSelectedForm] = useState('login');

  if (selectedForm === 'login') {
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

        <form id="login-form" className="flex flex-col w-10/12">
          <label className="visually-hidden" htmlFor="login-username">
            Username
          </label>
          <input
            type="text"
            name="login-username"
            id="login-username"
            className="login-input bg-light p-1.5 mb-6"
            placeholder="Username"
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
          />
          <button className="btn">Login</button>
        </form>
      </div>
      // </section>
    );
  } else if (selectedForm === 'register') {
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

        <form id="register-form" className="flex flex-col w-10/12">
          <label className="visually-hidden" htmlFor="register-username">
            Username
          </label>
          <input
            type="text"
            name="register-username"
            id="register-username"
            className="register-input bg-light p-1.5 mb-6"
            placeholder="Username"
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
          />
          <button className="btn">Register</button>
        </form>
      </div>
      // </section>
    );
  }
};

export default AuthForm;
