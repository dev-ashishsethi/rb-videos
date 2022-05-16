export async function addVideoToPlaylist(
  customAxios,
  playlistId,
  playlists,
  setPlaylists,
  newVideo
) {
  const playlist = playlists.filter((playlist) => playlist._id === playlistId);

  const res = await customAxios({
    method: "POST",
    url: `/api/user/playlists/${playlist[0]._id}`,
    data: { video: newVideo },
  });

  console.log("add to playlist", res);

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
}