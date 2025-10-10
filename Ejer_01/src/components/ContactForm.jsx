import React, { useState } from "react";

const ContactForm = () => {
  const isProduction = import.meta.env.PROD;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "", 
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    if (!isProduction) {
      e.preventDefault();
      alert("Formulario simulado en desarrollo.");
      setSubmitted(true);
      return;
    }
  };

  if (submitted) {
    return <p>¡Gracias por enviar el formulario!</p>;
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <p style={{ display: "none" }}>
        <label>
          No llenar si eres humano:{" "}
          <input
            name="bot-field"
            value={formData["bot-field"]}
            onChange={handleChange}
            autoComplete="off"
          />
        </label>
      </p>

      <p>
        <label>
          Nombre:<br />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </p>

      <p>
        <label>
          Mensaje:<br />
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <button type="submit">Enviar</button>
      </p>
    </form>
  );
};

export default ContactForm;