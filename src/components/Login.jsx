import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
      <div className="hero-content w-full flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body pb-2">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="px-6 pb-4">
            New to this website ? Please{" "}
            <Link className="link" to="/register">
              Register.
            </Link>
          </p>
          <button
            onClick={handleGoogleSignIn}
            className="mx-6 mb-2 btn block me-auto "
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
