import { getAllActors } from "../../lib/cinema";
import Link from "next/link";

export default function ActorsPage() {
  const actors = getAllActors();
  return (
    <main>
      <h1>Actores</h1>
      <ul>
        {actors.map(a => (
          <li key={a.id}>
            <Link href={`/actors/${a.id}`}>
              <img src={a.photo} alt={a.name} width="100"/>
              <p>{a.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
