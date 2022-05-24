import { Toast } from "../../Components/Toast/Toast";
import { watchLaterAction } from "../../store";

export async function addWatchLaterHandler(
  customAxios,
  watchLaterDispatch,
  singleVideo
) {
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/watchlater",
      data: {
        video: singleVideo,
      },
    });
    watchLaterDispatch(
      watchLaterAction.addWatchLaterHandler(res.response.watchlater)
    );
    
    Toast("success", "Video added to watch later");
  } catch (error) {
    Toast("error", error);
  }
}
