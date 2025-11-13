import React from "react";

export default function ProfileModal({ profile, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600">Fechar</button>
        <div className="flex gap-6">
          <img src={profile.foto} alt={profile.nome} className="w-28 h-28 rounded-full object-cover" />
          <div>
            <h2 className="text-2xl font-bold">{profile.nome}</h2>
            <p className="text-sm text-gray-500">{profile.cargo} — {profile.localizacao}</p>
            <p className="mt-3">{profile.resumo}</p>

            <div className="mt-4">
              <h3 className="font-semibold">Habilidades técnicas</h3>
              <div className="text-sm text-gray-700">{profile.habilidadesTecnicas?.join(", ")}</div>
            </div>

            <div className="mt-3">
              <h3 className="font-semibold">Soft skills</h3>
              <div className="text-sm text-gray-700">{profile.softSkills?.join(", ")}</div>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1 border rounded-lg">Enviar mensagem</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">Conectar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
