import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { userErrors } from "../errors";
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
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // submitting the form
  function onSubmit(data: FormData) {
    console.log(data.username, data.password);

    axios
      .post("http://localhost:3001/user/register", {
        username: data.username,
        password: data.password,
      })
      .then((response) => {
        console.log("User registered successfully:", response.data);
        alert("Registration Completed!");
        // Handle success
      })
      .catch((error) => {
        if (error.response.data.type === userErrors.USERNAME_ALREADY_EXISTS) {
          alert(userErrors.USERNAME_ALREADY_EXISTS);
          return;
        } else {
          alert("Server Error");
          return;
        }
      });
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
