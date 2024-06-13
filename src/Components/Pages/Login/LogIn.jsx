/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";

const LogIn = () => {
  const { login } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(user);
  const handelLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;

        console.log("user log in successfuly");
        console.log(user);
        setSuccess("log in successfuly");
      })

      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  if (user) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="border w-[70%] mx-auto rounded-sm mt-[50px]">
      <h2 className="text-center text-3xl font-semibold my-8">please logIn </h2>
      <form
        onSubmit={handelLogIn}
        className="lg:w-[50%] mx-auto border p-4 mb-8 rounded-lg"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] text-white">Login</button>
        </div>
        {error && <small className="text-red-500 font-bold">{error}</small>}
        {success && (
          <small className="text-green-500 font-semibold">{success}</small>
        )}
      </form>
      <p className="text-center">
        do not have an account please{" "}
        <Link className="text-blue-600 font-bold" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
