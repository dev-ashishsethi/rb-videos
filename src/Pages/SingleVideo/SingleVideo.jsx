import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAxios } from "../../customHooks/useAxios";
import ReactPlayer from "react-player";
import "./singleVideo.css";
import * as All from "../../icons/icons";
import { useVideo } from "../../Context/VideoContext";
import { viewsConvert } from "../../Utils/ViewsConvert";
import { checkInLikedList, checkInList } from "../../Utils/checkInLikedList";
import { addLikedVideo } from "../../Utils/Likedvideos/addLikedVideo";
import { revomeLikedVideo } from "../../Utils/Likedvideos/revomeLikedVideo";
import { adddToHistory } from "../../Utils/Historyvideos/adddToHistory";

import { removeWatchLaterHandler } from "../../Utils/WatchLater/removeWatchLaterHandler";
import { addWatchLaterHandler } from "../../Utils/WatchLater/addWatchLaterHandler";
import { Playlist } from "../../Components/Playlist/Playlist";
import { useAuth } from "../../Context/loginContext";
import { useDispatch, useSelector } from "react-redux";

export function SingleVideo() {
  const { videoId } = useParams();
  const [singleVideo, setSingleVideo] = useState("");
  const { customAxios } = useAxios();
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [playlistModal, setPlaylistModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const showMore = () => setShowDescription(!showDescription);

  const likedVideos = useSelector((state) => state.likedVideos);
  const likedDispatch = useDispatch();

  const { watchLater } = useSelector((state) => state.watchLater);
  const watchLaterDispatch = useDispatch();
  const historyDispatch = useDispatch();
  function toggleLike(singleVideo) {
    login
      ? checkInList(singleVideo, likedVideos)
        ? revomeLikedVideo(customAxios, likedDispatch, singleVideo)
        : addLikedVideo(customAxios, likedDispatch, singleVideo)
      : navigate("/signIn");
  }

  function playListHandler() {
    login ? setPlaylistModal(true) : navigate("/signIn");
  }
  function closePlaylist() {
    console.log("close playlist");
    setPlaylistModal(false);
  }
  function toggleWatchLater(singleVideo) {
    login
      ? checkInList(singleVideo, watchLater)
        ? removeWatchLaterHandler(customAxios, watchLaterDispatch, singleVideo)
        : addWatchLaterHandler(customAxios, watchLaterDispatch, singleVideo)
      : navigate("/signIn");
  }
  const playHandler = () => {
    adddToHistory(customAxios, historyDispatch, singleVideo);
  };
  useEffect(() => {
    (async () => {
      const res = await customAxios({
        method: "GET",
        url: "/api/videos",
      });
      setSingleVideo(res.response.videos.find((video) => video.id === videoId));
    })();
  }, [singleVideo]);

  return (
    <section className="video-page">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=" + singleVideo?.id}
        controls
        onPlay={playHandler}
        width={"100%"}
      />
      {playlistModal && <Playlist func={closePlaylist} video={singleVideo} />}
      <h2>{singleVideo?.snippet?.title}</h2>
      <div className="channel-name-btns">
        <p>{singleVideo?.snippet?.channelTitle}</p>

        <div className="video-btn-section">
          <button
            className="btn video-btn"
            onClick={() => toggleLike(singleVideo)}
          >
            <All.BxsLike /> Like
          </button>
          <button
            className="btn video-btn"
            onClick={() => toggleWatchLater(singleVideo)}
          >
            <All.IcBaselineWatchLater /> Watch Later
          </button>
          <button className="btn video-btn" onClick={playListHandler}>
            <All.DashiconsPlaylistVideo /> Add To Playlist
          </button>
        </div>
      </div>
      <p>{viewsConvert(singleVideo?.statistics?.viewCount)} Views</p>
      <p>Description:</p>
      <p
        className={
          showDescription
            ? "video-description-visible"
            : "video-description-hide"
        }
      >
        {singleVideo?.snippet?.description}
      </p>
      <button className="btn show-more-btn" onClick={showMore}>
        {showDescription ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
