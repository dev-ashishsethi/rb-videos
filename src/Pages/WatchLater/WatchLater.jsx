import { useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { useVideo } from "../../Context/VideoContext";

export function WatchLater() {
  const {
    watchLater,
    setWatchLaterVideos,
    watchLaterPage,
    setHistoryPage,
    setWatchLaterPage,
    setPlaylistPage,
  } = useVideo();

  useEffect(() => {
    setHistoryPage(false);
    setWatchLaterPage(true);
    setPlaylistPage(false)
  }, []);
  return (
    <div className="explore-page">
      <h1>Watch Later</h1>
      <section className="video-listing">
        {watchLater?.map((video) => (
          <Card data={video} key={video.id} />
        ))}
      </section>
    </div>
  );
}
