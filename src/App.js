import "./App.css";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Movie App
      </h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Link to="/movies">Our Movies</Link>  | <Link to="/">Go Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
