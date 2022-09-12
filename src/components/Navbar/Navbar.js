import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const handleSignOut = async () => {
    window.open("https://quiz-test-server.onrender.com/auth/logout", "_self");
  };
  return (
    <>
      <div className="px-2 md:px-24 navbar bg-gradient-to-l from-accent to-secondary">
        <div className="flex-1">
          <Link
            to={user ? "/dashboard" : "/"}
            className="normal-case text-2xl text-white"
          >
            Quiz Test
          </Link>
        </div>
        {user && (
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.picture} alt={user?.name} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="text-center">
                  <button
                    className="font-semibold text-center"
                    onClick={handleSignOut}
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
