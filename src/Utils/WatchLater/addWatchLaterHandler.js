export async function addWatchLaterHandler(
  customAxios,
  setWatchLaterVideos,
  singleVideo
) {
  const res = await customAxios({
    method: "POST",
    url: "/api/user/watchlater",
    data: {
      video: singleVideo,
    },
  });
  console.log(res.response.watchlater);
  setWatchLaterVideos(res.response.watchlater);
}
