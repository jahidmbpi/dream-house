import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Fotter from "../Pages/Home/Fotter";

const Root = () => {
  return (
    <div className="mx-14 ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Root;
