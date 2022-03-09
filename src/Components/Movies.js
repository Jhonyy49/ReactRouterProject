import { Link, Outlet } from "react-router-dom";
import { getMovies } from "../data";

export default function Movies() {
  let Movies = getMovies();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {Movies.map((Movies) => (
          <div>
            <img
              src={Movies.imgSrc}
              alt="img"
              style={{ height: "200px", width: "150px" }}
            ></img>
            <h4>Movie name : {Movies.name}</h4>
            <h4>Year : {Movies.year}</h4>
            <h4>Rating : {Movies.rating}</h4>

            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/movies/${Movies.number}`}
              key={Movies.number}
            >
              <h4>{Movies.name} Description</h4>
            </Link>
          </div>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
