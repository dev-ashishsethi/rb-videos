import { Toast } from "../../Components/Toast/Toast";
import { historyAction } from "../../store";

export async function deleteFromHistory(customAxios, historyDispatch, videoId) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: `/api/user/history/${videoId}`,
    });

    historyDispatch(historyAction.deleteFromHistory(res.response.history));
    Toast("success", "deleted Video from history");
  } catch (error) {
    Toast("error", error);
  }
}
