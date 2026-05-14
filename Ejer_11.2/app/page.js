import pool from "../lib/db"
import Link from "next/link"

export default async function Home() {

    const [recetas] = await pool.query(
        "SELECT * FROM recetas ORDER BY fecha_creacion DESC"
    )

    return (
        <div>

            <Link href="/recetas/nueva">
                Crear Nueva Receta
            </Link>

            <br />
            <br />

            {
                recetas.map((receta) => (

                    <div className="card" key={receta.id}>

                        <h2>{receta.titulo}</h2>

                        <p>{receta.descripcion_corta}</p>

                        <Link href={`/recetas/${receta.id}`}>
                            Ver receta
                        </Link>

                    </div>

                ))
            }

        </div>
    )
}