export async function deletePlaylist(customAxios, setPlaylists, playlistId) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistId}`,
    });
    console.log("delte playlist", res);
    setPlaylists(res.response.playlists);
  } catch (error) {
    console.error(error);
  }
}
