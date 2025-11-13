import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import ProfileModal from "./components/ProfileModal";
import profiles from "./data/profiles.json"; // import direto do JSON

export default function App() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = profiles.filter(p =>
    p.nome.toLowerCase().includes(query.toLowerCase()) ||
    (p.area && p.area.toLowerCase().includes(query.toLowerCase())) ||
    (p.cargo && p.cargo.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="max-w-5xl mx-auto mb-6">
        <h1 className="text-3xl font-bold">O Futuro do Trabalho — Rede de Perfis</h1>
        <p className="text-sm text-gray-600">Explore perfis simulados. Clique em um card para ver detalhes.</p>
        <div className="mt-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome, área ou cargo..."
            className="w-full max-w-md p-2 border rounded-lg"
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <ProfileCard key={p.id} profile={p} onOpen={() => setSelected(p)} />
        ))}
      </main>

      {selected && (
        <ProfileModal profile={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
