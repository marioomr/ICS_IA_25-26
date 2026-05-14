import { crearReceta } from "../../../actions/recetas"

export default function NuevaReceta() {

    return (
        <div>

            <h2>Nueva receta</h2>

            <form action={crearReceta}>

                <input
                    type="text"
                    name="titulo"
                    placeholder="Titulo"
                />

                <textarea
                    name="descripcion_corta"
                    placeholder="Descripcion corta"
                />

                <textarea
                    name="ingredientes"
                    placeholder="Ingredientes"
                />

                <textarea
                    name="instrucciones"
                    placeholder="Instrucciones"
                />

                <input
                    type="number"
                    name="tiempo_coccion"
                    placeholder="Tiempo coccion"
                />

                <button>
                    Crear receta
                </button>

            </form>

        </div>
    )
}