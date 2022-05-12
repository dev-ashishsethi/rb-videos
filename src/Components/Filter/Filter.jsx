import { useVideo } from "../../Context/VideoContext"

export function Filter(){
    const { categories,categoryDispatch } = useVideo();
return (
<section>
      <input
        type="checkbox"
        name=""
        id="All"
        className="explore-checkbox"
        onChange={() => categoryDispatch({ type: "category_ALL" })}
      />
      <label htmlFor="All" className="explore-filters">
        All
      </label>
      <input
        type="checkbox"
        name=""
        id="Action"
        value={"Action"}
        checked={categories.category.includes("Action")}
        onChange={(e) =>
          categoryDispatch({ type: "category", payload: e.target.value })
        }
        className="explore-checkbox"
      />
      <label htmlFor="Action" className="explore-filters">
        Action
      </label>
      <input
        type="checkbox"
        name=""
        id="thriller"
        value={"Thriller"}
        checked={categories.category.includes("Thriller")}
        onChange={(e) =>
          categoryDispatch({ type: "category", payload: e.target.value })
        }
        className="explore-checkbox"
      />
      <label htmlFor="thriller" className="explore-filters">
        Thriller
      </label>
      <input
        type="checkbox"
        name=""
        id="Comedy"
        value={"Comedy"}
        checked={categories.category.includes("Comedy")}
        onChange={(e) =>
          categoryDispatch({ type: "category", payload: e.target.value })
        }
        className="explore-checkbox"
      />
      <label htmlFor="Comedy" className="explore-filters">
        Comedy
      </label>
      <input
        type="checkbox"
        name=""
        value={"Horror"}
        checked={categories.category.includes("Horror")}
        onChange={(e) =>
          categoryDispatch({ type: "category", payload: e.target.value })
        }
        id="Horror"
        className="explore-checkbox"
      />
      <label htmlFor="Horror" className="explore-filters">
        Horror
      </label>
    </section>)

}

