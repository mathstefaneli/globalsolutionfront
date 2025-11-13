import profiles from "./data/profiles.json";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Perfis Profissionais</h1>
      
      <div className="flex flex-wrap justify-center gap-6">
        {profiles.map((perfil) => (
          <ProfileCard key={perfil.id} perfil={perfil} />
        ))}
      </div>
    </div>
  );
}
