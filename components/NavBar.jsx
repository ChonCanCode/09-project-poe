import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex items-center justify-between bg-gray-700 rounded-lg p-2">
      <nav className="flex space-x-4 font-bold">
        <Link
          className={`inline-block transform transition-transform duration-300 px-3 py-2 rounded-lg hover:bg-gray-400 
            ${currentPath === "/" ? "text-yellow-400" : "text-white"}`}
          to="/"
        >
          <i className="fa-regular fa-map"></i>
          <span className="ml-1">Home</span>
        </Link>

        <Link
          className={`inline-block transform transition-transform duration-300 px-3 py-2 rounded-lg ${
            currentPath === "/currency" ? "text-yellow-400" : "text-white"
          } hover:bg-gray-400`}
          to="/currency"
        >
          <i className="fa-solid fa-chart-line"></i>
          <span className="ml-1">Currency</span>
        </Link>
      </nav>

      <nav className="font-bold">
        <Link
          className={`inline-block transform transition-transform duration-300 px-3 py-2 rounded-lg ${
            currentPath === "/login" ? "text-yellow-400" : "text-white"
          } hover:bg-gray-400`}
          to="/login"
        >
          <i className="fa-solid fa-circle-user"></i>
          <span className="ml-1">Login</span>
        </Link>
      </nav>
    </div>
  );
}
