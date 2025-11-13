import React from "react";

export default function ProfileCard({ profile, onOpen }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col">
      <div className="flex items-center gap-4">
        <img src={profile.foto} alt={profile.nome} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h2 className="font-semibold">{profile.nome}</h2>
          <p className="text-sm text-gray-500">{profile.cargo}</p>
          <p className="text-xs text-gray-400">{profile.localizacao}</p>
        </div>
      </div>

      <p className="mt-3 text-sm flex-1">{profile.resumo}</p>

      <div className="mt-3 flex items-center justify-between">
        <div className="text-xs text-gray-500">
          {profile.habilidadesTecnicas?.slice(0,3).join(", ")}
        </div>
        <div className="flex gap-2">
          <button onClick={onOpen} className="px-3 py-1 border rounded-lg text-sm">Ver</button>
          <button className="px-3 py-1 bg-pink-500 text-white rounded-lg text-sm">Recomendar</button>
        </div>
      </div>
    </div>
  );
}
