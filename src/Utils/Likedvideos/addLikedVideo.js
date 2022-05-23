import axios from "axios";
import { Toast } from "../../Components/Toast/Toast";
import { likedAction } from "../../store";

export async function addLikedVideo(customAxios, likedDispatch, singleVideo) {
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/likes",
      data: { video: singleVideo },
    });
  
    likedDispatch(likedAction.addLikedVideo([...res?.response?.likes]));

    //([ ...res?.response?.likes])
    Toast("success", "Video added to liked videos");
  } catch (error) {
    Toast("error", error);
  }
}
