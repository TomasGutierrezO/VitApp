import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SidebarSwitch from "../components/SidebarSwitch";
import AppName from "../components/AppName";
import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative p-4 bg-white flex flex-col h-screen items-center gap-2">
      
     
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      
      <div className="flex w-full justify-between p-4">
        <SidebarSwitch onClick={() => setIsSidebarOpen(true)} />
        <AppName />
      </div>

    
      <div className="w-full max-w-2xl flex flex-col  text-lg">

        
        <div className="bg-[#EAF6FF] p-5 rounded-2xl shadow-md border-l-4 border-[#36AAFF] hover:shadow-cyan-500 transition mb-4">
          <h2 className="flex items-center gap-2 font-semibold text-[#36AAFF]">
            <FaQuestionCircle className="text-xl" /> ¿Qué es el IMC y para qué sirve?
          </h2>
          <p className="text-gray-700 mt-2">
            El Índice de Masa Corporal (IMC) es una medida que relaciona el peso y la altura de una persona.
            Se usa para evaluar si una persona tiene un peso saludable.
          </p>
        </div>

       
        <div className="bg-[#EAF6FF] p-5 rounded-2xl shadow-md border-l-4 border-[#36AAFF] hover:shadow-lg transition mb-4">
          <h2 className="flex items-center gap-2 font-semibold text-[#36AAFF]">
            <FaQuestionCircle className="text-xl" /> ¿Cuáles son los rangos del IMC y qué significan?
          </h2>
          <ul className="text-gray-700 mt-2 list-disc pl-5">
            <li><span className="font-semibold text-[#36AAFF]">Menos de 18.5:</span> Bajo peso</li>
            <li><span className="font-semibold text-[#36AAFF]">18.5 - 24.9:</span> Peso saludable</li>
            <li><span className="font-semibold text-[#36AAFF]">25 - 29.9:</span> Sobrepeso</li>
            <li><span className="font-semibold text-[#36AAFF]">30 o más:</span> Obesidad</li>
          </ul>
        </div>

        
        <div className="bg-[#EAF6FF] p-5 pb-5 rounded-2xl shadow-md border-l-4 border-[#36AAFF] hover:shadow-lg transition mb-4">
          <h2 className="flex items-center gap-2 font-semibold text-[#36AAFF]">
            <FaQuestionCircle className="text-xl" /> ¿El IMC es una medida precisa de salud?
          </h2>
          <p className="text-gray-700 mt-2 ">
            El IMC es útil, pero no es perfecto. No considera la masa muscular ni la distribución de grasa.
            Es recomendable complementarlo con otras evaluaciones médicas.
          </p>
        </div>

      </div>
    </div>
  );
};

export default FAQ;

