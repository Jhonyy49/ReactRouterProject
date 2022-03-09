import { useParams } from "react-router-dom";
import { getMovie } from "./data";

export default function Invoice() {
  let params = useParams();
  let invoice = getMovie(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Movie name: {invoice.name}</h2>

      <h2>Movie year : {invoice.year}</h2>

      <h2>Movie Rating: {invoice.rating}</h2>
      <h2>
        Movie Description: <br /> <br /> {invoice.description}
      </h2>
      <h2>Trailer : </h2>
      <iframe src={invoice.trailer} width="80%" height="50%"></iframe>
    </main>
  );
}
