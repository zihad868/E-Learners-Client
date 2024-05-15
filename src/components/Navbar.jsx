import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../assets/css/Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);

  console.log(user);

  const handleSignOut = () => {
    signoutUser();
  };

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

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-[#70ced3] underline" : ""
        }
      >
        About
      </NavLink>

      <NavLink
        to="/popular"
        className={({ isActive }) =>
          isActive ? "text-[#70ced3] underline" : ""
        }
      >
        Books Rating
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
            {/* Small Device */}
            {navLink}
          </ul>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <Link to="/" className="text-xl">
            <img src={logo} alt="" />
          </Link>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-semibold text-gray-500 text-sm">
              {navLink}
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-end">
        {!user?.email && (
          <>
            <Link
              to="/authentication"
              className="btn bg-[#90ebee] rounded-2xl text-gray-600"
            >
              Signin
            </Link>
          </>
        )}

        {user?.email && (
          <>
            <div className="dropdown dropdown-end z-20">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-20 rounded-full">
                  <img alt="User Image" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
              >
                <li>
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
