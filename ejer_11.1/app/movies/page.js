import { getAllMovies } from "../../lib/cinema";
import Link from "next/link";

export default function MoviesPage() {
  const movies = getAllMovies();
  return (
    <main>
      <h1>Películas</h1>
      <ul>
        {movies.map(m => (
          <li key={m.id}>
            <Link href={`/movies/${m.id}`}>
              <img src={m.poster} alt={m.title} width="120"/>
              <p>{m.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
