import { Toast } from "../../Components/Toast/Toast";
import { historyAction } from "../../store";

export async function adddToHistory(customAxios, historyDispatch, singleVideo) {
  try {
    const res = await customAxios({
      method: "POST",
      url: "/api/user/history",
      data: { video: singleVideo },
    });
    historyDispatch(historyAction.adddToHistory(res.response.history));
    Toast("success", "Video added to history");
  } catch (error) {
    Toast("error", error);
  }
}
