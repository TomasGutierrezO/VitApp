import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Logo from "../components/Logo";
import Button from "../components/Button";

const Gender = () => {
  const navigate = useNavigate();
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    const generoGuardado = localStorage.getItem("generoSeleccionado");
    if (generoGuardado) {
      setSeleccionado(generoGuardado);
    }
  }, []);

  const manejarSeleccion = (genero) => {
    setSeleccionado(genero);
    localStorage.setItem("generoSeleccionado", genero);
  };

  const manejarContinuar = () => {
    if (!seleccionado) {
      Swal.fire({
        title: "Selección requerida",
        text: "Debes seleccionar un género antes de continuar.",
        icon: "info",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#36AAFF",
      });
    } else {
      navigate("/data-form");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen p-1 gap-10">
      <div className="flex gap-4 p-3">
        <img
          src="/flecha-atras.png"
          alt="Atrás"
          className="w-8 h-8 cursor-pointer absolute left-10 top-10"
          onClick={() => navigate("/")}
        />
        <Logo />
      </div>

      <div>
        <p className="tracking-tight font-semibold p-1 text-3xl mb-3 pb-1 text-center">
          Aumenta tu metabolismo con nuestra atención personalizada
        </p>
      </div>
      <p className="font-bold mx-5 text-[#36AAFF] text-3xl pb-1 text-center">
        Selecciona tu género:
      </p>

      {/* Seleccionar Género */}
      <div className="flex justify-center gap-4 mt-7 mb-5">
        {/* Femenino */}
        <div className="flex flex-col items-center" onClick={() => manejarSeleccion("Femenino")}>
          <div
            className={`w-32 h-32 rounded-full overflow-hidden border-2 ${
              seleccionado === "Femenino" ? "border-blue-500 shadow-lg" : "border-gray-300"
            }`}
          >
            <img src="/Femenino.jpg" alt="Femenino" className="w-full h-full object-cover" />
          </div>
          <p className="tracking-tight font-semibold text-xl mt-2 text-center">Femenino</p>
        </div>

        {/* Masculino */}
        <div className="flex flex-col items-center" onClick={() => manejarSeleccion("Masculino")}>
          <div
            className={`w-32 h-32 rounded-full overflow-hidden border-2 ${
              seleccionado === "Masculino" ? "border-blue-500 shadow-lg" : "border-gray-300"
            }`}
          >
            <img src="/Masculino.jpg" alt="Masculino" className="w-full h-full object-cover" />
          </div>
          <p className="tracking-tight font-semibold text-xl mt-2 text-center">Masculino</p>
        </div>

      </div>

      <Button onClick={manejarContinuar} text="Continuar" />
    </div>
    
  );
};

export default Gender;
