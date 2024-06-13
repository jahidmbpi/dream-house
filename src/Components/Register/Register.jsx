import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [redirect, setRedirect] = useState(false);

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo);
    createUser(email, password)
      .then((Result) => {
        console.log(Result.user);
        setSuccess("user create succesfuly");
        setRedirect(true);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <div className="border w-[70%] mx-auto rounded-sm my-[50px]">
        <h2 className="text-center text-3xl font-semibold my-8">
          Register your Account{" "}
        </h2>
        <form
          onSubmit={handelRegister}
          className="lg:w-[50%] mx-auto border p-4 mb-8 rounded-lg"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="enter your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Register</button>
          </div>
          {success && (
            <small className="text-red-600 m-2 font-semibold">{success}</small>
          )}
          {error && (
            <small className="text-red-600 m-2 font-semibold">{error}</small>
          )}
        </form>
        <p className="text-center">
          Allready have an Account{" "}
          <Link className="text-blue-600 font-bold" to="/login">
            logIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
