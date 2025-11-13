import { useState } from "react";
import ProfileModel from "./ProfileModel";

export default function ProfileCard({ perfil }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-80 hover:shadow-xl transition-shadow">
      <img
        src={perfil.foto}
        alt={perfil.nome}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />

      <h2 className="text-xl font-semibold text-center text-gray-800">{perfil.nome}</h2>
      <p className="text-center text-gray-500">{perfil.cargo}</p>
      <p className="text-sm text-center text-gray-400 mt-2">{perfil.localizacao}</p>
      <p className="text-sm text-gray-600 mt-3 text-center">{perfil.resumo}</p>

      <div className="mt-4 text-center">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ver mais
        </button>
      </div>

      {open && <ProfileModel perfil={perfil} onClose={() => setOpen(false)} />}
    </div>
  );
}
