import { useEffect } from "react";
import { carousel } from "./Carousel.js";
import "./Carousel.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export function Caraousel() {
  const [carouselImage, setCarouselImage] = useState(carousel[0].image);
  const [carouselName, setCarouselName] = useState(carousel[0].name);

  const navigate = useNavigate();
  useEffect(() => {
    let i = 1;

    const timerId = setInterval(() => {
      setCarouselImage(carousel[i].image);
      setCarouselName(carousel[i].name);
      ++i;

      if (i > carousel.length - 1) {
        i = 1;
      } else {
        i = i;
      }
    }, 3000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <section className="explore-section" onClick={() => navigate("/explore")}>
      <div className="explore-btn">
        <button className="btn btn-primary carousel-btn">Explore Now</button>
      </div>
      <img src={carouselImage} alt={carouselName} className="explore-images" />
    </section>
  );
}
