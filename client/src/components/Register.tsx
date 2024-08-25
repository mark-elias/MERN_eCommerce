function Register() {
  return (
    <>
      <section className="custom-section">
        <div className="form-container">
          <h1 className="text-center text-2xl">Register</h1>
          <p className="text-center">Set a username and password to register</p>
          <form className="custom-form">
            <div>
              <label htmlFor="username" className="block">
                Username
              </label>
              <input id="username" type="text" className="custom-input" />
            </div>
            <div>
              <label htmlFor="password" className="block">
                Set a password
              </label>
              <input id="password" type="password" className="custom-input" />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="custom-button-primary">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="form-container">
          <h1 className="text-center text-2xl">Register</h1>
          <p className="text-center">Set a username and password to register</p>
        </div>
      </section>
    </>
  );
}

export default Register;
