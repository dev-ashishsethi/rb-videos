import { Toast } from "../../Components/Toast/Toast";

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
  
  setWatchLaterVideos(res.response.watchlater);
  Toast("success", "Video added to watch later");
}
