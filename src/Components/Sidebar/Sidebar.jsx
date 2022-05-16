import { Link } from "react-router-dom";
import * as All from "../../icons/icons";
export function Sidebar() {
  return (
    <section className="sidebar">
      <ul className="sidebar-container">
        <Link to="/">
          <li className="sidebar-items">
            <All.IonHome /> Home
          </li>
        </Link>
        <Link to="/explore">
          <li className="sidebar-items">
            <All.ZondiconsExplore /> Explore
          </li>
        </Link>
       <Link to={"/playlist"}>
          <li className="sidebar-items">
            <All.DashiconsPlaylistVideo /> Playlist
          </li>
        </Link>
        <Link to={"/likedVideos"}>
          <li className="sidebar-items">
            <All.BxsLike /> Liked Videos
          </li>
        </Link>
        <Link to={"/watchLater"}>
          <li className="sidebar-items">
            <All.IcBaselineWatchLater /> Watch Later
          </li>
        </Link>
        <Link to={"/history"}>
          <li className="sidebar-items">
            <All.FontistoHistory /> History
          </li>
        </Link>
      </ul>
    </section>
  );
}
