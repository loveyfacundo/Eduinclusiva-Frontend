function Home() {
  return (
    <div className="container-home">
      <div className="home-left">
        <h1 className="home-title-gradient">Inclusión <span>Digital</span><br />Educativa</h1>
        <p className="home-desc">Transformando la educación inclusiva con inteligencia artificial para estudiantes neurodivergentes</p>
        <div className="home-actions">
          <button className="primary-btn">Explorar la plataforma</button>
          <button className="sec-btn">Conocer más &rarr;</button>
        </div>
      </div>
      <div className="home-right">
        <img className="home-img" src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80" alt="clase inclusiva" />
      </div>
    </div>
  );
}
export default Home;

