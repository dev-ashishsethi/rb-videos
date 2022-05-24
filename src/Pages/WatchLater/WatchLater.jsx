import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Components/Card/Card";
import { useVideo } from "../../Context/VideoContext";
import { historyAction, playlistAction, watchLaterAction } from "../../store";

export function WatchLater() {
  const {
    // watchLater,
    // setWatchLaterVideos,
    // watchLaterPage,
    // setHistoryPage,
    // setWatchLaterPage,
    // setPlaylistPage,
  } = useVideo();

  const { watchLater } = useSelector((state) => state.watchLater);
  const watchLaterDispatch = useDispatch();
  const playlistDispatch = useDispatch();
  const historyDispatch = useDispatch();

  useEffect(() => {
    historyDispatch(historyAction.setHistoryPage(false));
    watchLaterDispatch(watchLaterAction.watchLaterPage(true));
    playlistDispatch(playlistAction.singlePlaylist(false));
  }, []);
  return (
    <div className="explore-page">
      <h1>Watch Later</h1>
      <section className="video-listing">
        {watchLater?.length > 0 &&
          watchLater?.map((video) => <Card data={video} key={video.id} />)}
      </section>
    </div>
  );
}
