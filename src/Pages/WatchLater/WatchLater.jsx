import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Components/Card/Card";
import { historyAction, playlistAction, watchLaterAction } from "../../store";

export function WatchLater() {
  const { watchLaterVideos } = useSelector((state) => state.watchLater);
  const watchLaterDispatch = useDispatch();
  const playlistDispatch = useDispatch();
  const historyDispatch = useDispatch();

  useEffect(() => {
    historyDispatch(historyAction.setHistoryPage(false));
    watchLaterDispatch(watchLaterAction.watchLaterPage(true));
    playlistDispatch(playlistAction.singlePlaylist(false));
  }, []);

  console.log("watchLaterVideos", watchLaterVideos);
  return (
    <div className="explore-page">
      <h1>Watch Later</h1>
      <section className="video-listing">
        {watchLaterVideos?.length > 0 &&
          watchLaterVideos?.map((video) => (
            <Card data={video} key={video.id} />
          ))}
      </section>
    </div>
  );
}
