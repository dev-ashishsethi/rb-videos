export async function deleteFromHistory(customAxios, setHistoryVideos, videoId) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/history/${videoId}`,
    });
   
    setHistoryVideos(res.response.history);
  } catch (error) {
    console.error(error);
  }
}
