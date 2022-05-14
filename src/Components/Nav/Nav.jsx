import { Link } from "react-router-dom";
import * as All from "../../icons/icons";
import { useAuth } from "../../Context/loginContext";

export function Nav() {
  const { login, setShowSignIn } = useAuth();
  const LoginHandler = () => {
    setShowSignIn(true);
  };
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <p className="nav-title">
          R<span className="nav-title-short">&</span>B
          <span className="nav-title-short"> Videos </span>
        </p>
      </Link>

      <input
        type="text"
        className="searchbar videos-search"
        placeholder="Search for Videos"
      />
      {login ? (
        <button className="profile-btn">
          <All.IconoirProfileCircled className="profile" />

          <div className="profile-options">
            <ul>
              <li>Profile</li>
              <li>Log Out</li>
            </ul>
          </div>
        </button>
      ) : (
        <Link to="/signIn" className="login-btn">
          {" "}
          <button className="btn btn-primary login-btn" onClick={LoginHandler}>
            Log In
          </button>
        </Link>
      )}
    </nav>
  );
}
