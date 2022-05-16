import "./App.css";
import { Nav } from "./Components/Nav/Nav.jsx";
import { Sidebar } from "./Components/Sidebar/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./Context/loginContext";
import { Home } from "./Pages/Home/Home";
import { Explore } from "./Pages/Explore/Explore";
import { SingleVideo } from "./Pages/SingleVideo/SingleVideo";
import { SignIn } from "./Pages/SignIn/SignIn";
import { SignUp } from "./Pages/SignUp/SignUp";
import { LikedVideos } from "./Pages/LikedVideos/LikedVideos";
import { History } from "./Pages/History/History";
import { WatchLater } from "./Pages/WatchLater/WatchLater";
import { PlaylistPage } from "./Pages/Playlist/PlaylistPage";
import { SinglePlaylistPage } from "./Pages/SinglePlaylist/SinglePlaylist";
import { Profile } from "./Pages/Profile/Profile";

function App() {
  const { login } = useAuth();

  return (
    <div className="layout-container">
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/playlist/:playlistId" element={<SinglePlaylistPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
