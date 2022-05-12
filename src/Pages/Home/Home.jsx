import { Link, useNavigate } from "react-router-dom";
import { Caraousel } from "../../Components/Caraousel/Caraousel";
import { useVideo } from "../../Context/VideoContext";
import "./Home.css";
export function Home() {
  const { categories, categoryDispatch } = useVideo();
  const navigate = useNavigate();
  const categoryHandler = (type, payload) => {
    categoryDispatch({ type: type, payload: payload });
    navigate("/explore");
  };

  
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
      
    </section>
  );
}
