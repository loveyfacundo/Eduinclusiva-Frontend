import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from './pages/Home';
import Caracteristicas from './pages/Caracteristicas';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Acceder from './pages/Acceder';
import { Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="main-bg">
      <Navbar />
      <div className="route-viewport">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/caracteristicas' element={<Caracteristicas />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/acceder' element={<Acceder />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
