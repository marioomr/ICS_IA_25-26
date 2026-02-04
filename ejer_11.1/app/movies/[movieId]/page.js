import { getMovieById, getCastByMovieId } from "../../../lib/cinema";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const { movieId } = params;
  const movie = getMovieById(movieId);

  if (!movie) return <main><h1>Página de película no encontrada</h1></main>;

  const cast = getCastByMovieId(movieId);

  return (
    <main>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} width="200" />
      <p>{movie.synopsis}</p>
      <p>{movie.director}</p>
      <p>{movie.year}</p>

      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
              <img src={actor.photo} alt={actor.name} width="100"/>
              <p>{actor.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
