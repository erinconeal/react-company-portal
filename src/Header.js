import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/">Employees</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/profile">Profile</Link>
    </header>
  );
};

export default Header;
