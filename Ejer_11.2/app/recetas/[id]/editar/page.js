import pool from "../../../../lib/db"

import { editarReceta } from "../../../../actions/recetas"

export default async function EditarReceta({ params }) {

    const { id } = await params

    const [recetas] = await pool.query(
        "SELECT * FROM recetas WHERE id = ?",
        [id]
    )

    const receta = recetas[0]

    if (!receta) {
        return <p>Receta no encontrada</p>
    }

    return (
        <div>

            <h2>Editar receta</h2>

            <form action={editarReceta}>

                <input
                    type="hidden"
                    name="id"
                    value={receta.id}
                />

                <input
                    type="text"
                    name="titulo"
                    defaultValue={receta.titulo}
                />

                <textarea
                    name="descripcion_corta"
                    defaultValue={receta.descripcion_corta}
                />

                <textarea
                    name="ingredientes"
                    defaultValue={receta.ingredientes}
                />

                <textarea
                    name="instrucciones"
                    defaultValue={receta.instrucciones}
                />

                <input
                    type="number"
                    name="tiempo_coccion"
                    defaultValue={receta.tiempo_coccion}
                />

                <button>
                    Guardar cambios
                </button>

            </form>

        </div>
    )
}