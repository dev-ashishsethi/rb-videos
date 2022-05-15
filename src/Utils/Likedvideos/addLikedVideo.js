import axios from "axios";

export async function addLikedVideo(customAxios, setLikedVideos, singleVideo) {
 
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/likes",
      data: { video: singleVideo },
    });

    setLikedVideos((likedVideo) => [ ...res?.response?.likes]);
  } catch (error) {
    console.error(error);
  }
}
