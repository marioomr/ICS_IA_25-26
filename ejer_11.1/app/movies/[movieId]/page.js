import Link from "next/link";
import { getMovieById, getCastByMovieId } from "@/lib/cinema";

export default async function MovieDetailPage({ params }) {
  const { movieId } = await params;

  const movie = getMovieById(movieId);
  const cast = getCastByMovieId(movieId);

  if (!movie) {
    return <h1>Película no encontrada</h1>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} width="300" />
      <p>{movie.synopsis}</p>
      <p>{movie.director}</p>
      <p>{movie.year}</p>

      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
              <img src={actor.photo} alt={actor.name} width="100" />
              <p>{actor.name}</p>
            </Link>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
