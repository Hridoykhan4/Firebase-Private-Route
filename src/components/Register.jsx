import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name);
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-65px)]">
      <div className="hero-content w-full flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Register now!</h1>
        </div>
        <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body pb-2">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter Name"
              />
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

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p className="px-6 pb-4">
            Already have an account ? Please{" "}
            <Link className="link" to="/login">
              Login.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
