import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { RiDeleteBinLine } from "../../icons/icons";
import { deletePlaylist } from "../../Utils/Playlist/deletePlaylist";

export function PlaylistPage() {
  // const { playlists, setPlaylists } = useVideo();
  const { playlists, playlistObj } = useSelector((state) => state.playlist);
  const { customAxios } = useAxios();
  const playlistDispatch = useDispatch();
  return (
    <section class="content">
      <h1>Playlists</h1>
      {playlists?.length > 0 &&
        playlists?.map((playlist) => (
          <div className="playlist-page-container">
            <Link to={`/playlist/${playlist._id}`}>
              <div className="playlist-cards">{playlist.title}</div>
            </Link>
            <RiDeleteBinLine
              className="delete-btn-on-playlist"
              onClick={() =>
                deletePlaylist(customAxios, playlistDispatch, playlist._id)
              }
            />
          </div>
        ))}
    </section>
  );
}
