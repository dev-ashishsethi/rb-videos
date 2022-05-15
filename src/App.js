import "./App.css";
import logo from "./logo.png";

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
import { useVideo } from "./Context/VideoContext";
import { History } from "./Pages/History/History";
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
      </Routes>
    </div>
  );
}

export default App;
