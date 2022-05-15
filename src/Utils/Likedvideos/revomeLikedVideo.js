import axios from "axios";

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
  } catch (error) {
    console.error(error);
  }
}
