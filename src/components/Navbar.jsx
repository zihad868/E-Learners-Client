import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../assets/css/Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }, [theme])

  const handleTheme = (e) => {
     if(e.target.checked){
       setTheme('synthwave')
     } else{
      setTheme('light')
     }
  }


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
        Popular Books
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
        <label className="cursor-pointer grid place-items-center mr-5">
          <input
            type="checkbox"
            onChange={handleTheme}
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
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
