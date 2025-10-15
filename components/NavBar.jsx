import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-gray-700 p-4">
      <nav className="flex space-x-4 font-bold">
        <Link
          className="flex items-center text-white hover:text-yellow-400 hover:underline transition-colors duration-200"
          to="/"
        >
          <i className="fa-regular fa-map"></i>
          <span className="ml-1">Home</span>
        </Link>
        <Link
          className="flex items-center text-white hover:text-yellow-400 hover:underline transition-colors duration-200"
          to="/currency"
        >
          <i className="fa-solid fa-chart-line"></i>
          <span className="ml-1">Currency</span>
        </Link>
      </nav>

      <nav className="font-bold">
        <Link
          className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200"
          to="/login"
        >
          <i className="fa-solid fa-circle-user"></i>
          <span className="ml-1">Login</span>
        </Link>
      </nav>
    </div>
  );
}
