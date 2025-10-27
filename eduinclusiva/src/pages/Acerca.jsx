function Acerca() {
  return (
    <main className="route-viewport">
      <section className="page-container" aria-labelledby="acerca-title">
        <header>
          <h2
            id="acerca-title"
            className="home-title-gradient"
            style={{ fontSize: "2rem", marginBottom: "18px" }}
          >
            Acerca de <span>EduInclusiva</span>
          </h2>
          <p className="home-desc" style={{ marginBottom: "0" }}>
            EduInclusiva es una plataforma comprometida con la educación
            accesible para todas las personas. Diseñamos recursos y experiencias
            que permiten el aprendizaje en contextos diversos, priorizando la
            inclusión y la participación activa.
          </p>
        </header>

        <section aria-labelledby="mision-title" style={{ marginTop: "1.4rem" }}>
          <h3 id="mision-title" style={{ marginBottom: "8px", color: "#333" }}>
            Nuestra misión
          </h3>
          <p className="home-desc" style={{ marginBottom: 0 }}>
            Facilitar herramientas educativas que respeten las diferencias y
            potencien las capacidades de cada persona, con recursos accesibles,
            claros y confiables.
          </p>
        </section>

        <section aria-labelledby="vision-title" style={{ marginTop: "1rem" }}>
          <h3 id="vision-title" style={{ marginBottom: "8px", color: "#333" }}>
            Nuestra visión
          </h3>
          <p className="home-desc" style={{ marginBottom: 0 }}>
            Ser un referente nacional en soluciones educativas inclusivas, donde
            la tecnología y el diseño se pongan al servicio del aprendizaje
            equitativo.
          </p>
        </section>

        <section aria-labelledby="valores-title" style={{ marginTop: "1rem" }}>
          <h3 id="valores-title" style={{ marginBottom: "8px", color: "#333" }}>
            Nuestros valores
          </h3>
          <ul style={{ color: "#898ea0", lineHeight: 1.6 }}>
            <li>Accesibilidad e inclusión</li>
            <li>Respeto y diversidad</li>
            <li>Transparencia y calidad</li>
          </ul>
        </section>

        <div className="home-actions" style={{ marginTop: "1.6rem" }}>
          <button
            className="primary-btn"
            aria-label="Contactar con EduInclusiva"
          >
            Contáctanos
          </button>
          <button
            className="sec-btn"
            aria-label="Ver características de la plataforma"
          >
            Ver características
          </button>
        </div>
      </section>
    </main>
  );
}
export default Acerca;
