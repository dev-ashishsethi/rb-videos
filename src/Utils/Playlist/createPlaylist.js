import { Toast } from "../../Components/Toast/Toast";
import { playlistAction } from "../../store";

export async function createPlaylist(
  customAxios,
  playlistDispatch,
  playlistObj
) {
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/playlists",
      data: { playlist: playlistObj },
    });
    playlistDispatch(playlistAction.createPlaylist(res.response.playlists));
    Toast("success", "Playlist created successfully");
  } catch (error) {
    Toast("error", error);
  }
}
