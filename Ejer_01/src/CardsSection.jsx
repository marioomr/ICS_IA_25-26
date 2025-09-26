function CardsSection() {
  const cards = [
    {
      titulo: "Tarjeta 1",
      texto: "Este es el contenido de la tarjeta 1.",
      img: "https://via.placeholder.com/150"
    },
    {
      titulo: "Tarjeta 2",
      texto: "Este es el contenido de la tarjeta 2.",
      img: "https://via.placeholder.com/150"
    },
    {
      titulo: "Tarjeta 3",
      texto: "Este es el contenido de la tarjeta 3.",
      img: "https://via.placeholder.com/150"
    },
    {
      titulo: "Tarjeta 4",
      texto: "Este es el contenido de la tarjeta 4.",
      img: "https://via.placeholder.com/150"
    }
  ];

  return (
    <section className="container my-5">
      <div className="row">
        {cards.map(({ titulo, texto, img }, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img src={img} className="card-img-top" alt={titulo} />
              <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsSection;
