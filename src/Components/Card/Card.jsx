import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { RiDeleteBinLine } from "../../icons/icons";
import { checkInList } from "../../Utils/checkInLikedList";
import { deleteFromHistory } from "../../Utils/Historyvideos/deleteFromHistory";
import { deleteVideoFromPlaylist } from "../../Utils/Playlist/deleteVideoFromPlaylist";
import { videoDate } from "../../Utils/videoDate";
import { videoDuration } from "../../Utils/videoDuration";
import { viewsConvert } from "../../Utils/ViewsConvert";
import { addWatchLaterHandler } from "../../Utils/WatchLater/addWatchLaterHandler";
import { removeWatchLaterHandler } from "../../Utils/WatchLater/removeWatchLaterHandler";
import "./Card.css";
export function Card({ data, playlistId }) {
 
  const { customAxios } = useAxios();
  const { playlists, playlistPage } = useSelector((state) => state.playlist);
  const playlistDispatch = useDispatch();
  const { historyPage } = useSelector((state) => state.history);
  const { watchLater } = useSelector((state) => state.watchLater);
 
  const watchLaterDispatch = useDispatch();
  const historyDispatch = useDispatch();
  function toggleWatchLater(data) {
    checkInList(data, watchLater)
      ? removeWatchLaterHandler(customAxios, watchLaterDispatch, data)
      : addWatchLaterHandler(customAxios, watchLaterDispatch, data);
  }

  return (
    <div className="video-card" title={data.snippet.title}>
      <Link to={`/video/${data.id}`}>
        <div className="thumbnail-section">
          <img src={data.snippet.thumbnails.medium.url} alt="" />
          <span className="video-duration">
            {videoDuration(data.contentDetails.duration)}
          </span>
        </div>
        <h4 className="video-title">{data.snippet.title}</h4>
        <p>{data.snippet.channelTitle}</p>
        <div className="views-section">
          <p>{viewsConvert(data.statistics.viewCount)}</p>
          <p>{videoDate(data.snippet.publishedAt, new Date())}</p>
        </div>
      </Link>
      <div className="btn-section">
        {checkInList(data, watchLater) ? (
          <button
            className="btn btn-primary w-100"
            onClick={() => toggleWatchLater(data)}
          >
            Remove from Watch Later
          </button>
        ) : (
          <button
            className="btn btn-primary w-100"
            onClick={() => toggleWatchLater(data)}
          >
            Watch Later
          </button>
        )}
        {playlistPage ? (
          <RiDeleteBinLine
            className="delete-btn"
            onClick={() =>
              deleteVideoFromPlaylist(
                customAxios,
                playlistDispatch,
                playlistId,
                data.id,
                playlists
              )
            }
            title="remove from playlist"
          />
        ) : null}
        {historyPage ? (
          <RiDeleteBinLine
            className="delete-btn"
            onClick={() =>
              deleteFromHistory(customAxios, historyDispatch, data.id)
            }
          />
        ) : null}
      </div>
    </div>
  );
}
