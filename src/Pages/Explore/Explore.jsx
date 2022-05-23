import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card } from "../../Components/Card/Card";
import { Filter } from "../../Components/Filter/Filter";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { historyAction, playlistAction, watchLaterAction } from "../../store";
import { categoryFilter } from "../../Utils/categoryFilter";
import { search } from "../../Utils/search";
import "./Explore.css";

export function Explore() {
  const {
    categories,
    videos,
    setVideos,
    // setHistoryPage,
    // setWatchLaterPage,
    searchQuery,
    // setPlaylistPage,
  } = useVideo();
  const playlistDispatch = useDispatch();
  const watchLaterDispatch = useDispatch();
  const historyDispatch = useDispatch();

  const { customAxios } = useAxios();
  useEffect(() => {
    historyDispatch(historyAction.setHistoryPage(false));
    watchLaterDispatch(watchLaterAction.watchLaterPage(false));
    playlistDispatch(playlistAction.singlePlaylist(false));
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
        console.log("from use effect", console.count());
      } catch (error) {
        console.error(error);
      }
    })();
  }, [categories]);
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
