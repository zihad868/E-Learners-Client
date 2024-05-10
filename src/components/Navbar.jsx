import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const navLink = (
    <div className="space-x-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#70ced3] underline" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/addBook"
        className={({ isActive }) =>
          isActive ? "text-[#70ced3] underline" : ""
        }
      >
        Add Book
      </NavLink>
      <NavLink
        to="/allBooks"
        className={({ isActive }) =>
          isActive ? "text-[#70ced3] underline" : ""
        }
      >
        All Books
      </NavLink>
      <NavLink
        to="/borrowedBooks"
        className={({ isActive }) =>
          isActive ? "text-[#70ced3] underline" : ""
        }
      >
        Borrowed Books
      </NavLink>
    </div>
  );
  return (
    <div className="navbar">
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
            {navLink}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </a>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-semibold text-gray-500 text-xl  ml-12">
              {navLink}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        <Link to='/signin' className="btn bg-[#90ebee] rounded-2xl text-gray-600">Signin</Link>
      </div>
    </div>
  );
};

export default Navbar;
