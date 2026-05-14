import "./globals.css"

export const metadata = {
    title: "Blog de Recetas",
    description: "CRUD recetas"
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>

                <div className="container">

                    <h1>Blog de Recetas</h1>

                    {children}

                </div>

            </body>
        </html>
    )
}