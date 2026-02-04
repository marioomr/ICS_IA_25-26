export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <a href="/movies">Películas</a> | <a href="/actors">Actores</a>
        </nav>
        {children}
      </body>
    </html>
  );
}