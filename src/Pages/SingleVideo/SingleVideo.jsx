import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAxios } from "../../customHooks/useAxios";
import ReactPlayer from "react-player";
import "./singleVideo.css";
import * as All from "../../icons/icons";
import { useVideo } from "../../Context/VideoContext";
import { viewsConvert } from "../../Utils/ViewsConvert";

export function SingleVideo() {
  const { videoId } = useParams();
  const [singleVideo, setSingleVideo] = useState("");
  const { customAxios } = useAxios();
  const { video } = useVideo();
  const [showDescription, setShowDescription] = useState(false);

  const showMore=()=>setShowDescription(!showDescription);
  

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
        width={"100%"}
      />
      <h2>{singleVideo?.snippet?.title}</h2>
      <div className="channel-name-btns">
        <p>{singleVideo?.snippet?.channelTitle}</p>

        <div className="video-btn-section">
          <button className="btn video-btn">
            <All.BxsLike /> Like
          </button>
          <button className="btn video-btn">
            <All.IcBaselineWatchLater /> Watch Later
          </button>
          <button className="btn video-btn">
            <All.DashiconsPlaylistVideo /> Add To Playlist
          </button>
        </div>
      </div>
      <p>{viewsConvert(singleVideo?.statistics?.viewCount)} Views</p>
      <p>Description:</p>
      <p
        className={showDescription ? "video-description-visible" : "video-description-hide"}
      >
        {singleVideo?.snippet?.description}
      </p>
      <button className="btn show-more-btn" onClick={showMore}>
        {showDescription?"Show Less":"Show More"}
      </button>
    </section>
  );
}
