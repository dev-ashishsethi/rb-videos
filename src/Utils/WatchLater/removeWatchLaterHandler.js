export async function removeWatchLaterHandler(
  customAxios,
  setWatchLaterVideos,
  singleVideo
) {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/watchlater/${singleVideo.id}`,
    });
    setWatchLaterVideos(res.response.watchlater);
}
