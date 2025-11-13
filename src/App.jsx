import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import profilesData from "./data/profiles.json";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setProfiles(profilesData);
  }, []);

  // Filtra os perfis conforme a busca
  const perfisFiltrados = profiles.filter((profile) => {
    const termo = busca.toLowerCase();
    return (
      profile.nome.toLowerCase().includes(termo) ||
      profile.cargo.toLowerCase().includes(termo) ||
      profile.area.toLowerCase().includes(termo) ||
      profile.habilidadesTecnicas.some((h) =>
        h.toLowerCase().includes(termo)
      )
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Lista de Profissionais
      </h1>

      {/* Campo de busca */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="🔍 Buscar por nome, cargo, área ou tecnologia..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400"
        />
      </div>

      {/* Grid de cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {perfisFiltrados.length > 0 ? (
          perfisFiltrados.map((p) => <ProfileCard key={p.id} profile={p} />)
        ) : (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
            Nenhum profissional encontrado 😕
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
