import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#ede8fd] via-blue-50 to-[#e3ecfc] border-t-2 border-[#d4caf6] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Columna 1: EduInclusiva */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#a892f3] to-[#7bb4fc] rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                </svg>
              </div>
              <span className="text-gray-900 text-2xl font-bold tracking-tight">EduInclusiva</span>
            </div>
            <p className="text-sm mb-6 text-gray-600 leading-relaxed">
              Plataforma integral para docentes especializados en educación inclusiva, adaptaciones curriculares y apoyo a la neurodivergencia.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 group">
                <div className="bg-[#ede8fd] p-2 rounded-lg group-hover:bg-[#d8ccfa] transition-colors">
                  <svg className="w-4 h-4" style={{ color: '#a892f3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700">info@eduinclusiva.org</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-[#ede8fd] p-2 rounded-lg group-hover:bg-[#d8ccfa] transition-colors">
                  <svg className="w-4 h-4" style={{ color: '#a892f3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-[#ede8fd] p-2 rounded-lg group-hover:bg-[#d8ccfa] transition-colors">
                  <svg className="w-4 h-4" style={{ color: '#a892f3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-700">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Plataforma */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 relative pb-2">
              Plataforma
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#a892f3] to-[#7bb4fc]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/caracteristicas" className="text-gray-600 hover:text-[#a892f3] transition-all duration-200 hover:translate-x-1 inline-block group">
                  <span className="group-hover:font-medium">Recursos</span>
                </Link>
              </li>
              <li>
                <Link to="/caracteristicas" className="text-gray-600 hover:text-[#a892f3] transition-all duration-200 hover:translate-x-1 inline-block group">
                  <span className="group-hover:font-medium">Características</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 relative pb-2">
              Soporte
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#a892f3] to-[#7bb4fc]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contacto" className="text-gray-600 hover:text-[#a892f3] transition-all duration-200 hover:translate-x-1 inline-block group">
                  <span className="group-hover:font-medium">Contacto</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Acerca de */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 relative pb-2">
              Acerca de
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#a892f3] to-[#7bb4fc]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/acerca" className="text-gray-600 hover:text-[#a892f3] transition-all duration-200 hover:translate-x-1 inline-block group">
                  <span className="group-hover:font-medium">Quiénes Somos</span>
                </Link>
              </li>
              <li>
                <Link to="/acerca" className="text-gray-600 hover:text-[#a892f3] transition-all duration-200 hover:translate-x-1 inline-block group">
                  <span className="group-hover:font-medium">Nuestro Equipo</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t-2 border-[#d4caf6] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-600 font-medium">
              © 2025 <span className="text-[#a892f3] font-bold">EduInclusiva</span>. Todos los derechos reservados.
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-[#ede8fd] p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-[#a892f3] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-[#ede8fd] p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-[#a892f3] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-[#ede8fd] p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-[#a892f3] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-[#ede8fd] p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-[#a892f3] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

