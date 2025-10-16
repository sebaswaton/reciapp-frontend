import { useEffect, useState } from "react";
import api from "../utils/fetchClient";

export default function Perfil() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/usuarios/me")
      .then((res) => setUser(res.data))
      .catch(() => setError("No se pudo cargar tu perfil"));
  }, []);

  useEffect(() => {
    if (user?.id) {
      api.get(`/wallets/${user.id}`)
        .then((res) => setWallet(res.data))
        .catch(() => {});
    }
  }, [user?.id]);

  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="px-6">
      <h1 className="text-2xl font-semibold mb-4">Mi Perfil</h1>
      {user ? (
        <div className="bg-white p-6 rounded-xl shadow max-w-md">
          <div className="mb-2"><span className="font-semibold">Nombre:</span> {user.nombre}</div>
          <div className="mb-2"><span className="font-semibold">Correo:</span> {user.correo}</div>
          <div className="mb-2"><span className="font-semibold">Rol:</span> {user.rol}</div>
          <div className="mt-4 p-3 bg-green-50 rounded">
            <span className="font-semibold">Puntos:</span> {wallet?.puntos ?? 0}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
