import { Toast } from "../../Components/Toast/Toast";
import { watchLaterAction } from "../../store";

export async function removeWatchLaterHandler(
  customAxios,
  watchLaterDispatch,
  singleVideo
) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/watchlater/${singleVideo.id}`,
    });
    watchLaterDispatch(
      watchLaterAction.removeWatchLaterHandler(res.response.watchlater)
    );
    Toast("success", "Video removed from watch later successfully");
  } catch (error) {
    Toast("error", error);
  }
}
