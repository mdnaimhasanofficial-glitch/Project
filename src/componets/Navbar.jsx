import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">

          <nav className="flex gap-6 items-center">
            <Link to="/">Home</Link>
            <Link to="/employee">Employee</Link>
            <Link to="/carditem">CardItem</Link>
            <Link to="/services">Services</Link>
          </nav>

          <div className="items-center shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded">
              Sign in
            </button>

            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
              Sign up
            </button>
          </div>

        </div>
      </header>
    </div>
  );
}