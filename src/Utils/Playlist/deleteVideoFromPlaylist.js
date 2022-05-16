export async function deleteVideoFromPlaylist(
  customAxios,
  setPlaylists,
  playlistId,
  videoId
) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistId}/${videoId}`,
    });
    setPlaylists((playlists) =>
      playlists.map((playlist) => {
        if (playlist._id === res.response.playlist._id) {
          playlist.videos = res.response.playlist.videos;
          return playlist;
        } else {
          return playlist;
        }
      })
    );
  } catch (error) {
    console.error(error);
  }
}
