import { useAxios } from "../customHooks/useAxios";

export async function categoryFilter(videos, category, customAxios) {
  try {
    const { response } = await customAxios({
      method: "GET",
      url: "/api/categories",
    });

    const categoryList = response.categories
      .filter((ele) => category.includes(ele.categoryName))
      .map((ele) => ele.categoryId);

    const videoList = videos.filter((video) =>
      categoryList.includes(Number(video.snippet.categoryId))
    );

   

    return videoList.length > 0 ? videoList : videos;
    
  } catch (error) {
    console.error("category", error);
  }
}
