const Auth = () => {
  return (
    <>
      <h2 className="">Login</h2>
      <form className="border p-10 flex flex-col m-10 sm:m-auto sm:max-w-sm  md:max-w-md">
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

        <label className="visually-hidden" htmlFor="login-email">
          Email
        </label>
        <input
          type="email"
          name="login-email"
          id="login-email"
          className="login-input p-1.5 mb-6"
          placeholder="Email"
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
    </>
  );
};

export default Auth;
