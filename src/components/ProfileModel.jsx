import { motion, AnimatePresence } from "framer-motion";

export default function ProfileModel({ perfil, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-6 text-gray-800 dark:text-gray-100 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
          >
            ✕
          </button>

          <div className="flex flex-col items-center">
            <img
              src={perfil.foto}
              alt={perfil.nome}
              className="w-28 h-28 rounded-full border-4 border-blue-500 dark:border-yellow-400 object-cover"
            />
            <h2 className="text-2xl font-semibold mt-3 text-blue-600 dark:text-yellow-400">
              {perfil.nome}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{perfil.cargo}</p>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
              {perfil.localizacao}
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-bold text-lg text-blue-600 dark:text-yellow-400 mb-2">
              Resumo
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {perfil.resumo}
            </p>

            <h3 className="font-bold text-lg text-blue-600 dark:text-yellow-400 mb-2">
              Habilidades Técnicas
            </h3>
            <ul className="list-disc list-inside mb-4">
              {perfil.habilidadesTecnicas?.map((h, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-lg text-blue-600 dark:text-yellow-400 mb-2">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside mb-4">
              {perfil.softSkills?.map((s, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
