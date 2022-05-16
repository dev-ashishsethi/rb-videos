import { Link, useNavigate } from "react-router-dom";
import * as All from "../../icons/icons";
import { useAuth } from "../../Context/loginContext";
import { useVideo } from "../../Context/VideoContext";

export function Nav() {
  const { login, setLogin, setShowSignIn } = useAuth();
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery } = useVideo();

  const logOutHandler = () => {
    localStorage.removeItem("login");
    setLogin(false);
  };
  const LoginHandler = () => {
    setShowSignIn(true);
  };
  const searchHandler = (e) => {
    if (e.key === "Enter") {
      navigate("/explore");
      setSearchQuery(e.target.value);
    }
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
        onKeyUp={searchHandler}
      />
      {login ? (
        <button className="profile-btn">
          <All.IconoirProfileCircled className="profile" />

          <div className="profile-options">
            <ul>
              
                <li onClick={()=>navigate("")}>Profile</li>
              
              <li onClick={logOutHandler}>Log Out</li>
            </ul>
          </div>
        </button>
      ) : (
        <Link to="/SignIn" className="login-btn">
          {" "}
          <button className="btn btn-primary login-btn" onClick={LoginHandler}>
            Log In
          </button>
        </Link>
      )}
    </nav>
  );
}
