import { Toast } from "../../Components/Toast/Toast";
import { playlistAction } from "../../store";

export async function deleteVideoFromPlaylist(
  customAxios,
  playlistDispatch,
  playlistId,
  videoId,
  playlists
) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistId}/${videoId}`,
    });

    playlistDispatch(
      playlistAction.deleteVideoFromPlaylist(
        playlists.map((playlist) => {
          if (playlist._id === res.response.playlist._id) {
            playlist.videos = res.response.playlist.videos;
            return playlist;
          } else {
            return playlist;
          }
        })
      )
    );

    Toast("success", "Deleted video from playlist");
  } catch (error) {
    Toast("error", error);
  }
}
