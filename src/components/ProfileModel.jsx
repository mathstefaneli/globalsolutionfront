import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProfileModel({ perfil, fechar }) {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [recomendado, setRecomendado] = useState(false);

  const enviarMensagem = (e) => {
    e.preventDefault();
    if (nome && mensagem) {
      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
        setShowMessageForm(false);
        setNome("");
        setMensagem("");
      }, 2000);
    }
  };

  const recomendar = () => {
    setRecomendado(true);
    setTimeout(() => setRecomendado(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-xl overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={fechar}
            className="float-right text-gray-500 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 text-xl"
          >
            ✖
          </button>

          <div className="flex flex-col items-center mt-6">
            <img
              src={perfil.foto}
              alt={perfil.nome}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500 dark:border-yellow-400"
            />
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-yellow-400">
              {perfil.nome}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{perfil.cargo}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {perfil.localizacao}
            </p>

            {/* 🔹 Botões de ação */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={recomendar}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300 transition-all"
              >
                🧡 Recomendar
              </button>
              <button
                onClick={() => setShowMessageForm(!showMessageForm)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-teal-400 dark:text-gray-900 dark:hover:bg-teal-300 transition-all"
              >
                💬 Enviar mensagem
              </button>
            </div>

            {/* Mensagens de feedback */}
            {recomendado && (
              <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                ✅ Profissional recomendado!
              </p>
            )}
            {enviado && (
              <p className="text-blue-600 dark:text-yellow-400 font-medium mb-2">
                📩 Mensagem enviada com sucesso!
              </p>
            )}

            {/* Formulário de mensagem */}
            {showMessageForm && (
              <motion.form
                onSubmit={enviarMensagem}
                className="w-full max-w-sm bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-inner mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full p-2 mb-3 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  required
                />
                <textarea
                  placeholder="Digite sua mensagem..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full p-2 mb-3 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                  rows="3"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-300 transition-all"
                >
                  Enviar
                </button>
              </motion.form>
            )}
          </div>

          {/* 🔹 Outras informações detalhadas */}
          <div className="mt-6 text-gray-700 dark:text-gray-200">
            <h3 className="text-lg font-semibold mb-2">Resumo</h3>
            <p className="mb-4">{perfil.resumo}</p>

            <h3 className="text-lg font-semibold mb-2">Habilidades Técnicas</h3>
            <ul className="list-disc list-inside mb-4">
              {perfil.habilidadesTecnicas.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
            <ul className="list-disc list-inside mb-4">
              {perfil.softSkills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2">Formação</h3>
            {perfil.formacao.length > 0 ? (
              <ul className="list-disc list-inside mb-4">
                {perfil.formacao.map((f, i) => (
                  <li key={i}>
                    {f.curso} — {f.instituicao} ({f.ano})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Nenhuma formação cadastrada.</p>
            )}

            <h3 className="text-lg font-semibold mb-2">Experiências</h3>
            {perfil.experiencias.length > 0 ? (
              <ul className="list-disc list-inside mb-4">
                {perfil.experiencias.map((exp, i) => (
                  <li key={i}>
                    {exp.empresa} — {exp.cargo} ({exp.inicio} a {exp.fim})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Nenhuma experiência cadastrada.</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
