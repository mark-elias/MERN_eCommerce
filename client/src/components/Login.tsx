import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { userErrors } from "../errors";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// Validation
const schema = z.object({
  username: z.string().min(3),
  password: z.string().min(4),
});
// basically making an interface using the Zod schema
type FormData = z.infer<typeof schema>;

function Login() {
  const navigate = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]);
  // useForm is a hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  // submitting form
  function onSubmit(data: FormData) {
    console.log(data);

    axios
      .post("http://localhost:3001/user/login", {
        username: data.username,
        password: data.password,
      })
      .then((result) => {
        // Assuming the token is returned in result.data.token
        setCookies("access_token", result.data.token);
        console.log("Login successful, token saved in cookies.");
        localStorage.setItem("userID", result.data.userID);

        // ✅ if login is succesful, send use to shop page
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR SECTION");
        console.log(err.response.data.type);

        switch (err.response.data.type) {
          case userErrors.NO_USER_FOUND:
            alert(userErrors.NO_USER_FOUND);
            break;
          case userErrors.WRONG_CREDENTIALS:
            alert(userErrors.WRONG_CREDENTIALS);
            break;
          default:
            alert("something went wrong");
        }
      });
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
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
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
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="custom-button-primary disabled:opacity-40"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
