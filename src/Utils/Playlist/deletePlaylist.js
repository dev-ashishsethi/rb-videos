import { Toast } from "../../Components/Toast/Toast";
import { playlistAction } from "../../store";

export async function deletePlaylist(customAxios, playlistDispatch, playlistId) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistId}`,
    });

    playlistDispatch(playlistAction.deletePlaylist(res.response.playlists));
    Toast("success", "Playlist deleted successfully");
  } catch (error) {
    Toast("error", error);
  }
}
