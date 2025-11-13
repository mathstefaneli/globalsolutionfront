// src/App.jsx
import { useState, useEffect } from "react";
import profiles from "./data/profiles.json";
import ProfileCard from "./components/ProfileCard";
import ProfileModel from "./components/ProfileModel";

export default function App() {
  const [filtroArea, setFiltroArea] = useState("Todos");
  const [filtroCidade, setFiltroCidade] = useState("Todas");
  const [busca, setBusca] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const [perfilSelecionado, setPerfilSelecionado] = useState(null);

  // 🌙 Modo escuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Áreas únicas
  const areas = ["Todos", ...new Set(profiles.map((p) => p.area))];

  // Cidades únicas
  const cidades = ["Todas", ...new Set(profiles.map((p) => p.localizacao))];

  // 🔎 Busca + filtros combinados
  const perfisFiltrados = profiles.filter((p) => {
    const termo = busca.toLowerCase();

    const buscaOK =
      p.nome.toLowerCase().includes(termo) ||
      p.cargo.toLowerCase().includes(termo) ||
      p.habilidadesTecnicas.some((h) =>
        h.toLowerCase().includes(termo)
      );

    const areaOK = filtroArea === "Todos" || p.area === filtroArea;
    const cidadeOK = filtroCidade === "Todas" || p.localizacao === filtroCidade;

    return buscaOK && areaOK && cidadeOK;
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">

      {/* 🌙 Botão Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-blue-600 text-white dark:bg-yellow-400 dark:text-gray-900 shadow-md"
      >
        {darkMode ? "☀️ Claro" : "🌙 Escuro"}
      </button>

      {/* Título */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-yellow-400 mb-6 text-center">
        Perfis Profissionais
      </h1>

      {/* 🔎 Campo de busca */}
      <div className="w-full max-w-xl mb-6">
        <input
          type="text"
          placeholder="Buscar por nome, cargo ou tecnologia..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full p-3 rounded-lg border border-blue-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 transition"
        />
      </div>

      {/* 🔧 Filtros */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 w-full max-w-3xl justify-center">

        {/* Filtro Área */}
        <select
          value={filtroArea}
          onChange={(e) => setFiltroArea(e.target.value)}
          className="p-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 w-full sm:w-1/2"
        >
          {areas.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>

        {/* Filtro Cidade */}
        <select
          value={filtroCidade}
          onChange={(e) => setFiltroCidade(e.target.value)}
          className="p-3 rounded-lg border bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 w-full sm:w-1/2"
        >
          {cidades.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

      </div>

      {/* 🔹 Lista de perfis responsiva */}
      <div
        className="
          w-full 
          grid 
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          px-2
          max-w-7xl
        "
      >
        {perfisFiltrados.length > 0 ? (
          perfisFiltrados.map((p) => (
            <ProfileCard
              key={p.id}
              perfil={p}
              onClick={() => setPerfilSelecionado(p)}
            />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300 col-span-full text-center">
            Nenhum perfil encontrado.
          </p>
        )}
      </div>

      {/* 🪟 Modal */}
      {perfilSelecionado && (
        <ProfileModel
          perfil={perfilSelecionado}
          onClose={() => setPerfilSelecionado(null)}
        />
      )}
    </div>
  );
}
