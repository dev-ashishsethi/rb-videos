import { Toast } from "../../Components/Toast/Toast";
import { likedAction } from "../../store";

export async function revomeLikedVideo(
  customAxios,
  likedDispatch,
  singleVideo
) {
  try {
    const response = await customAxios({
      method: "DELETE",
      url: `/api/user/likes/${singleVideo.id}`,
    });

    likedDispatch(likedAction.removeLikedVideo(singleVideo.id));


    Toast("success", "Video removed from liked successfully");
  } catch (error) {
    Toast("error", error);
  }
}
