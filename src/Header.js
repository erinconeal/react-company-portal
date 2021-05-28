import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="w-full mb-10 p-7">
      <div className="items-center">
        <Link to="/">
          <FontAwesomeIcon icon={["fa", "atom"]} />
        </Link>
        <div className="flex justify-end">
          <Link to="/">Employees</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
