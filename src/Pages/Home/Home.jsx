import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Caraousel } from "../../Components/Caraousel/Caraousel";
import { Card } from "../../Components/Card/Card";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { historyAction, playlistAction, watchLaterAction } from "../../store";
import { categoryFilter } from "../../Utils/categoryFilter";
import { search } from "../../Utils/search";
import "./Home.css";
export function Home() {
  const { categories, videos, setVideos, searchQuery, categoryDispatch } =
    useVideo();
  const navigate = useNavigate();
  const categoryHandler = (type, payload) => {
    categoryDispatch({ type: type, payload: payload });
    navigate("/explore");
  };

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
    <section className="content">
      <Caraousel />
      <h2>Categories</h2>

      <div
        className="category-cards"
        onClick={() => categoryHandler("category", "Action")}
      >
        Action
      </div>

      <div
        className="category-cards"
        onClick={() => categoryHandler("category", "Thriller")}
      >
        Thriller
      </div>

      <div
        className="category-cards"
        onClick={() => categoryHandler("category", "Comedy")}
      >
        Comedy
      </div>

      <div
        className="category-cards"
        onClick={() => categoryHandler("category", "Horror")}
      >
        Horror
      </div>
      <h2>Recommended Videos</h2>
      <div className="explore-page">
        <section className="video-listing">
          {videos.length > 0 ? (
            videos
              .splice(0, 9)
              ?.map((video) => <Card data={video} key={video.id} />)
          ) : (
            <h1>No Results found</h1>
          )}
        </section>
      </div>
    </section>
  );
}
