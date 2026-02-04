import { getActorById, getFilmographyByActorId } from "../../../lib/cinema";
import Link from "next/link";

export default async function ActorDetail({ params }) {
  const { actorId } = params;
  const actor = getActorById(actorId);

  if (!actor) return <main><h1>Página de actor no encontrada</h1></main>;

  const movies = getFilmographyByActorId(actorId);

  return (
    <main>
      <h1>{actor.name}</h1>
      <img src={actor.photo} alt={actor.name} width="200"/>
      <p>{actor.bio}</p>
      <p>{actor.birthYear}</p>

      <h2>Filmografía</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} width="120"/>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
