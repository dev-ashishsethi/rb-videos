export async function createPlaylist(customAxios, setPlaylists, playlistObj) {
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/playlists",
      data: { playlist: playlistObj },
    });
    setPlaylists(res.response.playlists);
  } catch (error) {
    console.log(error);
  }
}
