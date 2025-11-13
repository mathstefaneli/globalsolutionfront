import { useState, useEffect } from "react";
import profiles from "./data/profiles.json";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  const [filtroArea, setFiltroArea] = useState("Todos");
  const [filtroCidade, setFiltroCidade] = useState("Todos");
  const [filtroTech, setFiltroTech] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // 🔹 Valores únicos do JSON
  const areas = ["Todos", ...new Set(profiles.map((p) => p.area))];
  const cidades = ["Todos", ...new Set(profiles.map((p) => p.localizacao))];
  const tecnologias = [
    "Todos",
    ...new Set(profiles.flatMap((p) => p.habilidadesTecnicas || [])),
  ];

  // 🔹 Filtro e busca combinados
  const perfisFiltrados = profiles.filter((p) => {
    const areaOK = filtroArea === "Todos" || p.area === filtroArea;
    const cidadeOK = filtroCidade === "Todos" || p.localizacao === filtroCidade;
    const techOK =
      filtroTech === "Todos" ||
      (p.habilidadesTecnicas &&
        p.habilidadesTecnicas.includes(filtroTech));
    const buscaOK =
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.cargo.toLowerCase().includes(busca.toLowerCase());

    return areaOK && cidadeOK && techOK && buscaOK;
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* 🌙 Botão modo escuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 px-4 py-2 rounded-lg bg-blue-600 text-white dark:bg-yellow-400 dark:text-gray-900 transition-all"
      >
        {darkMode ? "☀️ Claro" : "🌙 Escuro"}
      </button>

      <h1 className="text-3xl font-bold text-blue-600 dark:text-yellow-400 mb-8 transition-colors">
        Perfis Profissionais
      </h1>

      {/* 🔍 Campo de busca + filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 w-full px-4">
        <input
          type="text"
          placeholder="Buscar por nome ou cargo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-64 p-3 rounded-lg border border-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition-all"
        />

        <select
          value={filtroCidade}
          onChange={(e) => setFiltroCidade(e.target.value)}
          className="w-48 p-3 rounded-lg border border-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400"
        >
          {cidades.map((cidade) => (
            <option key={cidade} value={cidade}>
              {cidade}
            </option>
          ))}
        </select>

        <select
          value={filtroTech}
          onChange={(e) => setFiltroTech(e.target.value)}
          className="w-48 p-3 rounded-lg border border-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400"
        >
          {tecnologias.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>
      </div>

      {/* 🔘 Botões de área */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setFiltroArea(area)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              filtroArea === area
                ? "bg-blue-600 text-white border-blue-600 dark:bg-yellow-400 dark:text-gray-900"
                : "bg-white text-blue-600 border-blue-300 hover:bg-blue-100 dark:bg-gray-800 dark:text-yellow-300 dark:border-gray-600 dark:hover:bg-gray-700"
            }`}
          >
            {area}
          </button>
        ))}
      </div>

      {/* 👥 Lista de perfis */}
      <div className="flex flex-wrap justify-center gap-6">
        {perfisFiltrados.length > 0 ? (
          perfisFiltrados.map((perfil) => (
            <ProfileCard key={perfil.id} perfil={perfil} />
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Nenhum perfil encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
