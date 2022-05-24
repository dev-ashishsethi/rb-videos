import { Toast } from "../../Components/Toast/Toast";
import { historyAction } from "../../store";

export async function clearAllHistory(customAxios, historyDispatch) {
  try {
    const res = await customAxios({
      method: "DELETE",
      url: "/api/user/history/all",
    });
    historyDispatch(historyAction.clearAllHistory(res.response.history));
    Toast("success", "Cleared all videos from history");
  } catch (error) {
    Toast("error", error);
  }
}
