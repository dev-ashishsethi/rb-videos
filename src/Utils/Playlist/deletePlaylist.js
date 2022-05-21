import { Toast } from "../../Components/Toast/Toast";

export async function deletePlaylist(customAxios, setPlaylists, playlistId) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistId}`,
    });
    
    setPlaylists(res.response.playlists);
    Toast("success", "Playlist deleted successfully");
  } catch (error) {
    Toast("error", error);
  }
}
