function CardsSection() {
  const cards = [
    {
      titulo: "Café La Esquina",
      texto: "Un rincón acogedor con cafés de especialidad y pasteles caseros.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Tostaderos Central",
      texto: "Tostado propio, ambiente minimalista y gran selección de cafés.",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Moka & Libros",
      texto: "Donde leer y beber café van de la mano. Ideal para tardes tranquilas.",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
    },
    {
      titulo: "Vapores & Granos",
      texto: "Café al vapor, aromas intensos y espacio moderno para reuniones.",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
}

  ];

  return (
    <section id="recomendaciones" className="container my-5">
      <h2 className="mb-4 text-center">Cafeterías Recomendadas</h2>
      <div className="row">
        {cards.map(({ titulo, texto, img }, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={img}
                className="card-img-top"
                alt={titulo}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text flex-grow-1">{texto}</p>
                <a href="#" className="btn btn-outline-brown mt-auto">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsSection;
