import { Link } from "react-router-dom";
import * as All from "../../icons/icons";
export function Sidebar() {
  return (
    <section className="sidebar">
      <ul className="sidebar-container">
        <Link to="/">
          <li className="sidebar-items">
            <All.IonHome />
             {" "}Home
          </li>
        </Link>
        <Link to="/explore">
          <li className="sidebar-items">
            <All.ZondiconsExplore /> 
            {" "}Explore
          </li>
        </Link>
        <a href="">
          <li className="sidebar-items">
            <All.DashiconsPlaylistVideo /> 
            {" "}Playlist
          </li>
        </a>
        <a href="./Trash/Trash.html">
          <li className="sidebar-items">
            <All.BxsLike /> 
            {" "}Liked Videos
          </li>
        </a>
        <a href="">
          <li className="sidebar-items">
            <All.IcBaselineWatchLater /> 
            {" "}Watch Later
          </li>
        </a>
        <a href="">
          <li className="sidebar-items">
            <All.FontistoHistory /> 
            {" "}History
          </li>
        </a>
    </ul>
    </section>
  );
}
