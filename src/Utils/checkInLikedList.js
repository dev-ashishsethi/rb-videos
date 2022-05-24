export const checkInList = (singleVideo, videosList) =>
  videosList?.length > 0 &&
  videosList?.find((video) => video.id === singleVideo.id);
