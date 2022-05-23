import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Components/Card/Card";
import { useAuth } from "../../Context/loginContext";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { historyAction, playlistAction } from "../../store";

export function LikedVideos() {
  
  const likedVideos = useSelector((state) => state.likedVideos);
  const playlistDispatch = useDispatch();
  const historyDispatch = useDispatch();

  useEffect(() => {
    historyDispatch(historyAction.setHistoryPage(false));
    playlistDispatch(playlistAction.singlePlaylist(false));
  }, []);

  return (
    <div className="explore-page">
      <h1>Liked Videos</h1>
      <section className="video-listing">
        {likedVideos?.map((video) => (
          <Card data={video} key={video.id} />
        ))}
      </section>
    </div>
  );
}
