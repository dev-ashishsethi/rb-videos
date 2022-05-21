import axios from "axios";
import { Toast } from "../../Components/Toast/Toast";

export async function addLikedVideo(customAxios, setLikedVideos, singleVideo) {
 
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/likes",
      data: { video: singleVideo },
    });

    setLikedVideos((likedVideo) => [ ...res?.response?.likes]);
    Toast("success", "Video added to liked videos");
  } catch (error) {
    Toast("error", error);
  }
}
