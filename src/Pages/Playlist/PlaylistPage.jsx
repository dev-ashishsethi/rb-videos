import { Link } from "react-router-dom";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { RiDeleteBinLine } from "../../icons/icons";
import { deletePlaylist } from "../../Utils/Playlist/deletePlaylist";

export function PlaylistPage() {
  const { playlists, setPlaylists } = useVideo();
  const { customAxios } = useAxios();
  return (
    <section class="content">
      <h1>Playlists</h1>
      {playlists.map((playlist) => (
        <div className="playlist-page-container">
          <Link to={`/playlist/${playlist._id}`}>
            <div className="playlist-cards">{playlist.title}</div>
          </Link>
          <RiDeleteBinLine
            className="delete-btn-on-playlist"
            onClick={() =>
              deletePlaylist(customAxios, setPlaylists, playlist._id)
            }
          />
        </div>
      ))}
    </section>
  );
}
