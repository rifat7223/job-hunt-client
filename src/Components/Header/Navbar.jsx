import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success('Signed out successfully');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Logout failed');
      });
  };

  const links = (
    <>
      <li>
        <Link className="hover:text-primary transition-colors" to={'/'}>Home</Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-colors" to={'/alljob'}>All Jobs</Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-colors" to={'/addajob'}>Add a Job</Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-colors" to={'/myaddjob'}>My Jobs</Link>
      </li>
      <li>
        <Link className="hover:text-primary transition-colors" to={'/acceptedTasks'}>Accepted Tasks</Link>
      </li>
    </>
  );

  return (
    <div className="shadow-md bg-white sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-primary">
            JobPortal
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <>
              {/* Profile */}
              <div className="tooltip tooltip-bottom" data-tip={user.displayName || "No Name"}>
                <img
                  className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-primary hover:scale-105 transition-transform"
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="profile"
                />
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-sm btn-outline btn-primary hover:bg-primary hover:text-white" to={'/login'}>
                Login
              </Link>
              <Link className="btn btn-sm btn-primary hover:bg-primary/90" to={'/register'}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
