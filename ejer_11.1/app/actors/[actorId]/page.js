import Link from "next/link";
import { getActorById, getFilmographyByActorId } from "@/lib/cinema";

export default async function ActorDetailPage({ params }) {
  const { actorId } = await params;

  const actor = getActorById(actorId);
  const movies = getFilmographyByActorId(actorId);

  if (!actor) {
    return <h1>Actor no encontrado</h1>;
  }

  return (
    <div>
      <h1>{actor.name}</h1>
      <img src={actor.photo} alt={actor.name} width="300" />
      <p>{actor.bio}</p>
      <p>{actor.birthYear}</p>

      <h2>Filmografía</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} width="100" />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
