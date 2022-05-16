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

export function SingleVideo() {
  const { videoId } = useParams();
  const [singleVideo, setSingleVideo] = useState("");
  const { customAxios } = useAxios();
  const { login } = useAuth();
  const navigate=useNavigate()
  const {
    video,
    likedVideos,
    setLikedVideos,
    watchLater,
    setWatchLaterVideos,
    history,
    setHistoryVideos,
  } = useVideo();
  const [playlistModal, setPlaylistModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const showMore = () => setShowDescription(!showDescription);

  function toggleLike(singleVideo) {
    login?checkInList(singleVideo, likedVideos)
      ? revomeLikedVideo(customAxios, setLikedVideos, singleVideo)
      : addLikedVideo(customAxios, setLikedVideos, singleVideo):navigate("/signIn")
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
        ? removeWatchLaterHandler(customAxios, setWatchLaterVideos, singleVideo)
        : addWatchLaterHandler(customAxios, setWatchLaterVideos, singleVideo)
      : navigate("/signIn");
  }
  const playHandler = () => {
    adddToHistory(customAxios, setHistoryVideos, singleVideo);
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
