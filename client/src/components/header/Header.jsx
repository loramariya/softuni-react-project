import { Link } from "react-router" 


export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Catalog</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <ul>
            {/* {isLoggedIn ? ( */}
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                <Link to="/logout">Logout</Link>
                </li>
              </>
            {/* ) : ( */}
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            {/* )} */}
          </ul>
        </div>
      </nav>
    </header>
  );
};