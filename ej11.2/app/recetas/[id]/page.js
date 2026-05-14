import pool from "../../../lib/db"

import Link from "next/link"

import {
    borrarReceta,
    crearComentario
} from "../../../actions/recetas"

export default async function RecetaDetalle({ params }) {

    const { id } = await params

    const [recetas] = await pool.query(
        "SELECT * FROM recetas WHERE id = ?",
        [id]
    )

    const receta = recetas[0]

    if (!receta) {
        return <p>Receta no encontrada</p>
    }

    const [comentarios] = await pool.query(
        `
        SELECT * FROM comentarios
        WHERE receta_id = ?
        ORDER BY fecha_creacion DESC
        `,
        [id]
    )

    return (
        <div>

            <h2>{receta.titulo}</h2>

            <p>{receta.descripcion_corta}</p>

            <h3>Ingredientes</h3>

            <p>{receta.ingredientes}</p>

            <h3>Instrucciones</h3>

            <p>{receta.instrucciones}</p>

            <p>
                Tiempo:
                {" "}
                {receta.tiempo_coccion}
                {" "}
                minutos
            </p>

            <Link href={`/recetas/${id}/editar`}>
                Editar receta
            </Link>

            <br />
            <br />

            <form action={borrarReceta}>

                <input
                    type="hidden"
                    name="id"
                    value={id}
                />

                <button>
                    Borrar receta
                </button>

            </form>

            <hr />

            <h3>Comentarios</h3>

            {
                comentarios.map((comentario) => (

                    <div className="card" key={comentario.id}>

                        <strong>
                            {comentario.autor}
                        </strong>

                        <p>{comentario.texto}</p>

                    </div>

                ))
            }

            <h3>Nuevo comentario</h3>

            <form action={crearComentario}>

                <input
                    type="hidden"
                    name="receta_id"
                    value={id}
                />

                <input
                    type="text"
                    name="autor"
                    placeholder="Autor"
                />

                <textarea
                    name="texto"
                    placeholder="Comentario"
                />

                <button>
                    Publicar comentario
                </button>

            </form>

        </div>
    )
}