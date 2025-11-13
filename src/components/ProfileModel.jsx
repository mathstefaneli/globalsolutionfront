export default function ProfileModel({ perfil, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative max-h-[90vh] overflow-y-auto">
        
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ✕
        </button>

        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center">
          <img
            src={perfil.foto}
            alt={perfil.nome}
            className="w-28 h-28 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">{perfil.nome}</h2>
          <p className="text-gray-500">{perfil.cargo}</p>
          <p className="text-sm text-gray-400">{perfil.localizacao}</p>
        </div>

        {/* Seções detalhadas */}
        <div className="mt-6 space-y-4 text-gray-700">
          <section>
            <h3 className="font-semibold text-blue-600">Resumo</h3>
            <p>{perfil.resumo}</p>
          </section>

          <section>
            <h3 className="font-semibold text-blue-600">Experiências</h3>
            {perfil.experiencias.length > 0 ? (
              <ul className="list-disc list-inside">
                {perfil.experiencias.map((exp, i) => (
                  <li key={i}>
                    <strong>{exp.cargo}</strong> na {exp.empresa} ({exp.inicio} – {exp.fim})  
                    <br />
                    <span className="text-sm">{exp.descricao}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Nenhuma experiência cadastrada.</p>
            )}
          </section>

          <section>
            <h3 className="font-semibold text-blue-600">Formação</h3>
            {perfil.formacao.length > 0 ? (
              perfil.formacao.map((f, i) => (
                <p key={i}>{f.curso} - {f.instituicao} ({f.ano})</p>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Nenhuma formação registrada.</p>
            )}
          </section>

          <section>
            <h3 className="font-semibold text-blue-600">Projetos</h3>
            {perfil.projetos.length > 0 ? (
              perfil.projetos.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block"
                >
                  {p.titulo} — {p.descricao}
                </a>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Nenhum projeto listado.</p>
            )}
          </section>

          <section>
            <h3 className="font-semibold text-blue-600">Certificados</h3>
            {perfil.certificados.length > 0 ? (
              <ul className="list-disc list-inside">
                {perfil.certificados.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">Nenhum certificado encontrado.</p>
            )}
          </section>

          <section>
            <h3 className="font-semibold text-blue-600">Idiomas</h3>
            {perfil.idiomas.length > 0 ? (
              perfil.idiomas.map((idi, i) => (
                <p key={i}>{idi.idioma} — {idi.nivel}</p>
              ))
            ) : (
              <p className="text-gray-500 text-sm">Nenhum idioma informado.</p>
            )}
          </section>

          <section>
            <h3 className="font-semibold text-blue-600">Áreas de Interesse</h3>
            {perfil.areainteres.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {perfil.areainteres.map((area, i) => (
                  <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                    {area}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Nenhuma área de interesse listada.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
