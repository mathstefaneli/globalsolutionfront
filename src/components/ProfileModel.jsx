import profiles from "../data/profiles.json";
import ProfileCard from "./ProfileCard";

export default function ProfileModel() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Nossos Perfis
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {profiles.map((perfil) => (
          <ProfileCard key={perfil.id} perfil={perfil} />
        ))}
      </div>
    </div>
  );
}
