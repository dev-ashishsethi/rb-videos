import { useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { Filter } from "../../Components/Filter/Filter";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { categoryFilter } from "../../Utils/categoryFilter";
import { search } from "../../Utils/search";
import "./Explore.css";

export function Explore() {
  const {
    categories,
    videos,
    setVideos,
    setHistoryPage,
    setWatchLaterPage,
    searchQuery,
    setPlaylistPage,
  } = useVideo();
  const { customAxios } = useAxios();
  useEffect(() => {
    setHistoryPage(false);
    setWatchLaterPage(false);
    setPlaylistPage(false);
    (async () => {
      try {
        const { response } = await customAxios({
          method: "GET",
          url: "/api/videos",
        });

        let filteredData = categoryFilter(
          response.videos,
          categories.category,
          customAxios
        );

        filteredData.then((data) => setVideos(search(data, searchQuery)));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [categories,videos]);
  return (
    <div className="explore-page">
      <Filter />
      <section className="video-listing">
        {videos.length > 0 ? (
          videos?.map((video) => <Card data={video} key={video.id} />)
        ) : (
          <h1>No Results found</h1>
        )}
      </section>
    </div>
  );
}
