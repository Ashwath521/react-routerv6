import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/product" className="nav-link">
        Product
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
    </>
  );
}
