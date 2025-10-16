import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-green-700">ReciApp</span>
          <Link to="/dashboard" className="hover:text-green-700">Dashboard</Link>
          <Link to="/solicitudes" className="hover:text-green-700">Solicitudes</Link>
          <Link to="/perfil" className="hover:text-green-700">Perfil</Link>
        </div>
        <button onClick={logout} className="text-sm bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
