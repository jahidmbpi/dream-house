import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);
  const handelLogOut = () => {
    Logout()
      .then(() => {
        console.log("logOut successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navbar = (
    <>
      <li className="font-bold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold">
        <Link to="/login">logIn</Link>
      </li>
      <li className="font-bold">
        <Link to="/contact">contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-green-500 rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Dream Home</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbar}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              className="btn w-[144px] bg-black text-white"
              onClick={handelLogOut}
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn w-[144px] bg-black text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
