import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Authentication = () => {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link to='signin'
          onClick={() => setTab(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tab === 1 && "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Sign In</span>
        </Link>
        <Link to='signup'
          onClick={() => setTab(2)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 ${
            tab === 2 && "border-b"
          } px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Sign Up</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Authentication;
