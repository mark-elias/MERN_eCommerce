import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation
const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
});
// basically making an interface using the Zod schema
type FormData = z.infer<typeof schema>;

function Register() {
  //useForm is a hook
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  // submitting the form
  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <>
      <div className="form-container">
        <h1 className="text-center text-2xl">Register</h1>
        <p className="text-center">Set a username and password to register</p>
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
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block">
              Set a password
            </label>
            <input
              id="password"
              type="password"
              className="custom-input"
              {...register("password")}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="custom-button-primary disabled:opacity-40"
              disabled={!isValid}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
