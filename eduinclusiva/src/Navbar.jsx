import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="nav-logo">IDE</span>
        Inclusión Digital Educativa
      </div>
      <div className="nav-links">
        <Link className="nav-link" to='/'>Inicio</Link>
        <Link className="nav-link" to='/caracteristicas'>Características</Link>
        <Link className="nav-link" to='/acerca'>Acerca de</Link>
        <Link className="nav-link" to='/contacto'>Contacto</Link>
        <div className="nav-acceder-wrap">
          <button className="nav-acceder-btn" onClick={() => setMenuOpen((v) => !v)}>
            Acceder ▾
          </button>
          {menuOpen && (
            <div className="nav-desplegable">
              <Link className="nav-desplegable-option" to="/acceder" onClick={()=>setMenuOpen(false)}>Registrarse</Link>
              <Link className="nav-desplegable-option" to="/acceder" onClick={()=>setMenuOpen(false)}>Iniciar sesión</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
