import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      id: 1,
      title: "Generación de Contenido Adaptado",
      description: "Convierte materiales educativos en versiones accesibles usando IA generativa: lectura fácil, audiolibros y pictogramas.",
      iconBg: "from-purple-200 to-purple-300",
      iconColor: "text-purple-600"
    },
    {
      id: 2,
      title: "Asistencia en Tiempo Real",
      description: "Los docentes reciben sugerencias pedagógicas adaptadas según las características de cada estudiante.",
      iconBg: "from-orange-200 to-orange-300",
      iconColor: "text-orange-600"
    },
    {
      id: 3,
      title: "Recursos Visuales y Auditivos",
      description: "Textos en alto contraste, sintetizadores de voz, subtitulado automático y traducción a lengua de señas.",
      iconBg: "from-blue-200 to-blue-300",
      iconColor: "text-blue-600"
    },
    {
      id: 4,
      title: "Análisis del Progreso",
      description: "Reportes automáticos con métricas sobre el rendimiento y evolución de los alumnos mediante IA.",
      iconBg: "from-green-200 to-green-300",
      iconColor: "text-green-600"
    },
    {
      id: 5,
      title: "Capacitación Docente",
      description: "Módulos interactivos de formación sobre inclusión digital, neurodivergencias y metodologías pedagógicas.",
      iconBg: "from-pink-200 to-pink-300",
      iconColor: "text-pink-600"
    },
    {
      id: 6,
      title: "Integración con Sistemas",
      description: "Se sincroniza con plataformas educativas existentes, facilitando la implementación en instituciones.",
      iconBg: "from-yellow-200 to-yellow-300",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
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

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Transformando la Educación Inclusiva</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I.D.E. es una aplicación impulsada por Inteligencia Artificial Generativa, diseñada para mejorar la experiencia de aprendizaje de estudiantes neurodivergentes y con discapacidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className={`bg-gradient-to-br ${feature.iconBg} px-8 py-10 flex items-center justify-center`}>
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className={`w-10 h-10 ${feature.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.id === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    )}
                    {feature.id === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    )}
                    {feature.id === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    )}
                    {feature.id === 4 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    )}
                    {feature.id === 5 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                    {feature.id === 6 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    )}
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Advantages Section */}
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image */}
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" 
                alt="Estudiante usando tecnología" 
                className="rounded-3xl shadow-2xl w-full max-w-md"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-gray-900 mb-10 tracking-tight">
                Ventajas <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Competitivas</span>
              </h2>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Accesibilidad Universal</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Optimización del Tiempo Docente</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Basada en Datos y Análisis Inteligente</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Fomenta la Inclusión Digital</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">Escalable y Flexible</span>
                </li>
              </ul>

              <Link to="/caracteristicas">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Ver más en detalle
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Download Section */}
      <div className="bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 text-gray-800">
              <h2 className="text-5xl font-bold mb-6 tracking-tight">Descarga Nuestra App<br />EduInclusiva Mobile</h2>
              <p className="text-xl mb-10 text-gray-600 leading-relaxed">
                Lleva todos los recursos, planificaciones y herramientas de educación inclusiva en tu dispositivo móvil. Acceso offline, sincronización automática y notificaciones de nuevos contenidos.
              </p>

              {/* Features */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Segura y Confiable: Datos protegidos y contenido verificado por especialistas</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Acceso Offline: Recursos disponibles sin conexión a internet</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Comunidad Docente: Conecta con otros educadores y comparte experiencias</span>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-4xl font-bold mb-2">4.9</div>
                  <div className="flex gap-1 mb-2">
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                  <div className="text-sm text-gray-600">Calificación</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-4xl font-bold mb-2">50k+</div>
                  <div className="text-sm text-gray-600">Descargas</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="text-4xl font-bold mb-2">2k+</div>
                  <div className="text-sm text-gray-600">Recursos</div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://play.google.com/store/apps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Descargar para Android
                </a>
                <a 
                  href="https://apps.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.46-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Descargar para iOS
                </a>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="flex-1 flex justify-center">
              <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-sm transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 mb-6 shadow-lg">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">EduInclusiva</h3>
                  <p className="text-gray-600 mb-8 text-lg">Tu compañera ideal para la educación inclusiva</p>
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 w-full shadow-lg hover:shadow-xl">
                    Disponible Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

