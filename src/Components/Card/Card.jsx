import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { RiDeleteBinLine } from "../../icons/icons";
import { deleteFromHistory } from "../../Utils/Historyvideos/deleteFromHistory";
import { videoDate } from "../../Utils/videoDate";
import { videoDuration } from "../../Utils/videoDuration";
import { viewsConvert } from "../../Utils/ViewsConvert";
import "./Card.css";
export function Card({ data }) {
  const { historyPage, setHistoryPage, setHistoryVideos } = useVideo();
  const {customAxios}=useAxios()
  // const deleteFromHistory=()=>{

  // }
  return (
    <div className="video-card" title={data.snippet.title}>
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
      <div className="btn-section">
        <button className="btn btn-primary w-100">Watch Later</button>
        {historyPage ? (
          <RiDeleteBinLine
            className="delete-btn"
            onClick={() =>
              deleteFromHistory(customAxios, setHistoryVideos, data.id)
            }
          />
        ) : null}
      </div>
    </div>
  );
}
