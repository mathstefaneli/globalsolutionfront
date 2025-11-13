import { useState } from "react";
import ProfileModel from "./ProfileModel";

export default function ProfileCard({ perfil }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-xl p-6 w-72 hover:scale-105 transition-transform cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={perfil.foto}
          alt={perfil.nome}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500 dark:border-yellow-400"
        />
        <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-yellow-300">
          {perfil.nome}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          {perfil.cargo}
        </p>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
          {perfil.resumo}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 transition"
        >
          Ver mais
        </button>
      </div>

      {open && <ProfileModel perfil={perfil} onClose={() => setOpen(false)} />}
    </>
  );
}
