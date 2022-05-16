import { useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { clearAllHistory } from "../../Utils/Historyvideos/clearAllHistory";

export function History() {
  const { history, setHistoryVideos, setHistoryPage,setWatchLaterPage,setPlaylistPage } = useVideo();
  const { customAxios } = useAxios();
  useEffect(() => {
    setHistoryPage(true);
    setWatchLaterPage(false);
    setPlaylistPage(false);
  }, []);
  return (
    <div className="explore-page">
      <h1>History</h1>
      
        <button
          className="btn btn-primary history-btn"
          onClick={() => clearAllHistory(customAxios, setHistoryVideos)}
        >
          Clear Full History
        </button>
      
      <section className="video-listing">
        {history?.map((video) => (
          <Card data={video} key={video.id} />
        ))}
      </section>
    </div>
  );
}
