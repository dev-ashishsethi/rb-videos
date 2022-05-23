import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAxios } from "../../customHooks/useAxios";
import { Card } from "../../Components/Card/Card";
import { useVideo } from "../../Context/VideoContext";
import { useDispatch, useSelector } from "react-redux";
import { historyAction, playlistAction } from "../../store";

export function SinglePlaylistPage() {
  const { playlistId } = useParams();
  const [singlePlaylist, setSinglePlaylist] = useState({});
  const playlistDispatch = useDispatch();
  const historyDispatch = useDispatch();
  
  const { customAxios } = useAxios();
  useEffect(() => {
    (async () => {
      const res = await customAxios({
        method: "GET",
        url: `/api/user/playlists/${playlistId}`,
      });
      setSinglePlaylist(res.response.playlist);
      historyDispatch(historyAction.setHistoryPage(false));
      playlistDispatch(playlistAction.singlePlaylist(true));
    })();
  }, [singlePlaylist]);
  return (
    <div className="explore-page">
      {/* <h1>{singlePlaylist.title}</h1> */}
      <section className="video-listing">
        {singlePlaylist?.videos?.map((video) => (
          <Card data={video} key={video.id} playlistId={singlePlaylist._id} />
        ))}
      </section>
    </div>
  );
}
