import { Toast } from "../../Components/Toast/Toast";

export async function createPlaylist(customAxios, setPlaylists, playlistObj) {
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/playlists",
      data: { playlist: playlistObj },
    });
    setPlaylists(res.response.playlists);
    Toast("success", "Playlist created successfully");
  } catch (error) {
    Toast("error",error);
  }
}
