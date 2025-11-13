/* src/components/ProfileCard.jsx */

export default function ProfileCard({ perfil }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-80 hover:shadow-xl transition-shadow">
      {/* Foto do perfil */}
      <img
        src={perfil.foto}
        alt={perfil.nome}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />

      {/* Nome e cargo */}
      <h2 className="text-xl font-semibold text-center text-gray-800">{perfil.nome}</h2>
      <p className="text-center text-gray-500">{perfil.cargo}</p>

      {/* Localização */}
      <p className="text-sm text-center text-gray-400 mt-2">{perfil.localizacao}</p>

      {/* Resumo */}
      <p className="text-sm text-gray-600 mt-3 text-center">{perfil.resumo}</p>

      {/* Habilidades */}
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Habilidades Técnicas:</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {perfil.habilidadesTecnicas.map((hab, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
            >
              {hab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
