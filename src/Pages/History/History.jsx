import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Components/Card/Card";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { historyAction, playlistAction, watchLaterAction } from "../../store";
import { clearAllHistory } from "../../Utils/Historyvideos/clearAllHistory";

export function History() {

  const { customAxios } = useAxios();
  const playlistDispatch = useDispatch();
  const { historyVideos, historyPage } = useSelector((state) => state.history);
  const watchLaterDispatch = useDispatch();
  const historyDispatch = useDispatch();

  useEffect(() => {
    historyDispatch(historyAction.setHistoryPage(true));
    watchLaterDispatch(watchLaterAction.watchLaterPage(false));
    playlistDispatch(playlistAction.singlePlaylist(false));
  }, [historyPage]);
  return (
    <div className="explore-page">
      <h1>History</h1>

      <button
        className="btn btn-primary history-btn"
        onClick={() => clearAllHistory(customAxios, historyDispatch)}
      >
        Clear Full History
      </button>

      <section className="video-listing">
        {historyVideos?.map((video) => (
          <Card data={video} key={video.id} />
        ))}
      </section>
    </div>
  );
}
