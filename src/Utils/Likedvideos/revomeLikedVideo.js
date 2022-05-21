import axios from "axios";
import { Toast } from "../../Components/Toast/Toast";

export async function revomeLikedVideo(
  customAxios,
  setLikedVideos,
  singleVideo
) {
  try {
    const response = await customAxios({
      method: "DELETE",
      url: `/api/user/likes/${singleVideo.id}`,
    });

    setLikedVideos((likedVideo) =>
      likedVideo.filter((video) => video.id !== singleVideo.id)
    );
    Toast("success", "Video removed from liked successfully");
  } catch (error) {
    Toast("error", error);
  }
}
