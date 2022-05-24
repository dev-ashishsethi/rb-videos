import { useDispatch, useSelector } from "react-redux";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { playlistAction } from "../../store";
import { addVideoToPlaylist } from "../../Utils/Playlist/addVideoToPlaylist";
import { createPlaylist } from "../../Utils/Playlist/createPlaylist";
export function Playlist({ func, video }) {

  const { customAxios } = useAxios();
  const { playlists, playlistObj } = useSelector((state) => state.playlist);
  const playlistDispatch = useDispatch();

  function playlistInputHandler(e) {
    playlistDispatch(
      playlistAction.setPlaylistObj({ [e.target.name]: e.target.value })
    );
  }

  return (
    <div className="playlist-container">
      <div className="playlist-modal">
        <h4 className="playlist-modal-title">Playlist</h4>
        <span className="close-btn" onClick={func}>
          x
        </span>
        {playlists.length > 0
          ? playlists.map((playlist) => {
              return (
                <div className="input-container">
                  <input
                    type={"checkbox"}
                    id={playlist?._id}
                    name={playlist?._id}
                    onChange={(e) =>
                      addVideoToPlaylist(
                        customAxios,
                        e.target.name,
                        playlists,
                        playlistDispatch,
                        video
                      )
                    }
                  />
                  <label htmlFor={playlist?._id} className="playlist-label">
                    {playlist?.title}
                  </label>
                </div>
              );
            })
          : null}
        <>
          <label htmlFor="" className="playlist-label">
            Title
          </label>
          <input
            type={"text"}
            className="playlist-title-input"
            name="title"
            onChange={playlistInputHandler}
          />
          <label htmlFor="" className="playlist-label">
            Description
          </label>
          <textarea
            type={"text"}
            className="playlist-description-textarea"
            name="description"
            onChange={playlistInputHandler}
          />
        </>
        <button
          className="btn btn-primary playlist-btn"
          onClick={() =>
            createPlaylist(customAxios, playlistDispatch, playlistObj)
          }
        >
          Create Playlist
        </button>
      </div>
    </div>
  );
}
