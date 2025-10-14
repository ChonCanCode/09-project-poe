import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBarLink">
      <Link to="/">Home</Link>
      <Link to="/currency">Currency</Link>
    </nav>
  );
}
