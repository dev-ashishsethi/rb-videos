import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../Components/Card/Card";
import { Filter } from "../../Components/Filter/Filter";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";
import { categoryFilter } from "../../Utils/categoryFilter";
import "./Explore.css";
export function Explore() {
  const { categories, videos, setVideos } = useVideo();
  const { customAxios } = useAxios();
  useEffect(() => {
    (async () => {
      try {
        const { response } = await customAxios({
          method: "GET",
          url: "/api/videos",
        });
        const filteredData = categoryFilter(
          response.videos,
          categories.category,
          customAxios
        );
        
        filteredData.then((data) => setVideos(data));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [categories]);
  return (
    <div className="explore-page">
      <Filter />
      <section className="video-listing">
        {videos?.map((video) => (
          <Link to={`/video/${video.id}`}>
            {" "}
            <Card data={video} key={video.id} />
          </Link>
        ))}
      </section>
    </div>
  );
}
