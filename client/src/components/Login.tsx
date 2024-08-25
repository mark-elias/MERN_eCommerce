import { FieldValues, useForm } from "react-hook-form";

function Login() {
  // useForm is a hook
  const { register, handleSubmit } = useForm();
  // submitting form
  function onSubmit(data: FieldValues) {
    console.log(data);
  }
  return (
    <div className="form-container">
      <h1 className="text-center text-2xl">Login</h1>
      <p className="text-center">Enter your username and password to login</p>
      <form className="form-input-section" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="custom-input"
            {...register("username")}
          />
        </div>
        <div>
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="custom-input"
            {...register("password")}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="custom-button-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
