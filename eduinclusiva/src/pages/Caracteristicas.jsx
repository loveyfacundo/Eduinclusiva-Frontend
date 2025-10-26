import { useState } from "react";

const tabs = [
  {
    id: "contenido",
    label: "Generación de Contenido",
    title: "Generación de Contenido Adaptado",
    description:
      "I.D.E. utiliza inteligencia artificial generativa para transformar materiales educativos estándar en versiones accesibles para estudiantes con diversas necesidades. Cada contenido se adapta automáticamente a diferentes formatos según los requerimientos específicos.",
    features: [
      { title: "Textos en Lectura Fácil", subtitle: "Simplificación de textos complejos manteniendo el contenido esencial" },
      { title: "Conversión a Audiolibros", subtitle: "Transformación de textos en archivos de audio con voces naturales" },
      { title: "Sistema de Pictogramas", subtitle: "Creación automática de representaciones visuales de conceptos" },
      { title: "Lenguaje de Señas", subtitle: "Interpretación automática del contenido a videos con lenguaje de señas" },
    ],
    button: "Probar ahora",
    image: "/path/to/tu-imagen.png", // reemplazá con la ruta de tu imagen
  },
  {
    id: "asistencia",
    label: "Asistencia Docente",
    title: "Asistencia Docente",
    description: "Descripción de asistencia docente aquí.",
    features: [],
    button: "Probar ahora",
    image: "/path/to/imagen2.png",
  },
  {
    id: "recursos",
    label: "Recursos Accesibles",
    title: "Recursos Accesibles",
    description: "Descripción de recursos accesibles aquí.",
    features: [],
    button: "Probar ahora",
    image: "/path/to/imagen3.png",
  },
  {
    id: "analisis",
    label: "Análisis y Reportes",
    title: "Análisis y Reportes",
    description: "Descripción de análisis y reportes aquí.",
    features: [],
    button: "Probar ahora",
    image: "/path/to/imagen4.png",
  },
];

export default function Caracteristicas() {
  const [activeTab, setActiveTab] = useState("contenido");
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Características de I.D.E.</h2>
        <p className="text-gray-500 mt-2">
          Descubre todas las herramientas y funcionalidades que I.D.E. ofrece para transformar la experiencia educativa de estudiantes neurodivergentes y con discapacidades.
        </p>
      </div>

      {/* Menú de Tabs */}
      <div className="flex justify-center space-x-4 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 -mb-px font-medium border-b-2 ${
              activeTab === tab.id
                ? "border-purple-500 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold mb-4">{current.title}</h3>
          <p className="text-gray-600 mb-4">{current.description}</p>

          {current.features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {current.features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-500 mr-2 mt-1">✔️</span>
                  <div>
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-gray-500 text-sm">{f.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <button className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition">
            {current.button}
          </button>
        </div>

        <div className="md:w-1/2">
          <img src={current.image} alt={current.title} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}