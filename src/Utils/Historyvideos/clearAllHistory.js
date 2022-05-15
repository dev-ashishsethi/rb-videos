export async function clearAllHistory(customAxios, setHistoryVideos) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: "/api/user/history/all",
    });
    setHistoryVideos(res.response.history);
  } catch (error) {
    console.error(error);
  }
}
