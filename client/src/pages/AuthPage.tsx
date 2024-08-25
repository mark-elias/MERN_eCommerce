import Login from "../components/Login";
import Register from "../components/Register";

function AuthPage() {
  return (
    <section className="section form-section">
      <Register></Register>
      <Login></Login>
    </section>
  );
}

export default AuthPage;
