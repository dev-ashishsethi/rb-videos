export const checkInList = (singleVideo, videosList) =>
  videosList?.find((video) => video.id === singleVideo.id);
