import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SidebarSwitch from "../components/SidebarSwitch";
import AppName from "../components/AppName";

const MyProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [genero, setGenero] = useState("");
  const [nombre, setNombre] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setIMC] = useState("");

  useEffect(() => {
    setGenero(localStorage.getItem("generoSeleccionado") || "Masculino");
    setNombre(localStorage.getItem("nombre") || "Sin nombre");
    setPeso(localStorage.getItem("peso") || "0");
    setAltura(localStorage.getItem("altura") || "0");
    setIMC(localStorage.getItem("imc") || "0");
  }, []);

  const getIMCStatus = (imc) => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Saludable";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };

  return (
    <div className="p-4 bg-[#ffffff] flex flex-col h-screen items-center gap-10">
     
      <div className="flex w-full justify-between mb-5 p-4">
        <SidebarSwitch onClick={() => setIsSidebarOpen(true)} />
        <AppName />
      </div>

      
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      
      <div className="w-50 h-50 rounded-full overflow-hidden border-2 mb-15 border-[#36AAFF]">
        <img
          src={genero === "Femenino" ? "/Femenino.jpg" : "/Masculino.jpg"}
          alt={genero}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

     
      <div className="w-full max-w-70 flex flex-col gap-4 text-lg">
        <div className="flex justify-between border-b border-[#36aaff] pb-2">
          <span className="font-semibold text-[#36AAFF]">Nombre:</span> <span>{nombre}</span>
        </div>
        <div className="flex justify-between border-b border-[#60AAFF] pb-2">
          <span className="font-semibold text-[#36AAFF]">Peso:</span> <span>{peso} kg</span>
        </div>
        <div className="flex justify-between border-b border-[#60AAFF] pb-2">
          <span className="font-semibold text-[#36AAFF]">Altura:</span> <span>{altura} cm</span>
        </div>
        <div className="flex justify-between border-b border-[#60AAFF] pb-2">
          <span className="font-semibold text-[#36AAFF]">IMC:</span> <span>{imc}</span>
        </div>
        <div className="flex justify-between border-b border-[#60AAFF] pb-2">
          <span className="font-semibold text-[#36AAFF]">Estado:</span> <span>{getIMCStatus(imc)}</span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

