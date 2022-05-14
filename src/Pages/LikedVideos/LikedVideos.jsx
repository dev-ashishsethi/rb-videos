import { useEffect } from "react";
import { Card } from "../../Components/Card/Card";
import { useAuth } from "../../Context/loginContext";
import { useVideo } from "../../Context/VideoContext";
import { useAxios } from "../../customHooks/useAxios";

export function LikedVideos() {
  const { customAxios } = useAxios();
  const { likedVideos } = useVideo();
  
  return (
    <div className="explore-page">
     <h1>Liked Videos</h1>
      <section className="video-listing">
        {likedVideos?.map(video=>(
            <Card data={video} key={video.id}/>
        ))}
       
      </section>
    </div>
  );
}
