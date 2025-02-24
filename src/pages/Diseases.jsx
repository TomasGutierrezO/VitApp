import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SidebarSwitch from "../components/SidebarSwitch";
import AppName from "../components/AppName";

const Diseases = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [imcStatus, setImcStatus] = useState("");
  const [enfermedades, setEnfermedades] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const diseases = {
    "Bajo peso": [
      { title: "Anemia", content: "Déficit de hierro en la sangre, causando fatiga y debilidad. Prevención: Consumir alimentos ricos en hierro como carnes magras, espinacas, legumbres y cereales fortificados." },
      { title: "Osteoporosis", content: "Huesos frágiles debido a la falta de calcio y vitamina D. Prevención: Consumir productos lácteos, almendras, vegetales de hoja verde y tomar suficiente sol para la producción de vitamina D." },
      { title: "Deficiencias Nutricionales", content: "Falta de vitaminas esenciales para el cuerpo. Prevención: Mantener una dieta equilibrada con frutas, verduras, proteínas y carbohidratos saludables." },
    ],
    "Saludable": [
      { title: "Menor riesgo de enfermedades", content: "Mantiene un equilibrio adecuado de nutrientes y bienestar general. Prevención: Seguir un estilo de vida activo, mantener una dieta balanceada y realizar chequeos médicos regulares." },
    ],
    "Sobrepeso": [
      { title: "Hipertensión", content: "Aumento de la presión arterial con riesgo de enfermedades cardíacas. Prevención: Reducir el consumo de sodio, realizar actividad física regularmente y mantener un peso saludable." },
      { title: "Resistencia a la insulina", content: "Mayor probabilidad de desarrollar diabetes tipo 2. Prevención: Consumir alimentos con bajo índice glucémico, evitar azúcares refinados y mantener un estilo de vida activo." },
      { title: "Dolores articulares", content: "Sobrecarga en las articulaciones causando molestias y desgaste. Prevención: Mantener un peso adecuado, realizar ejercicios de bajo impacto y fortalecer los músculos de soporte." },
    ],
    "Obesidad": [
      { title: "Diabetes tipo 2", content: "Alteración en la regulación del azúcar en sangre. Prevención: Controlar el consumo de carbohidratos simples, hacer ejercicio regularmente y mantener un peso saludable." },
      { title: "Enfermedades cardíacas", content: "Aumento del riesgo de infartos y otros problemas cardiovasculares. Prevención: Llevar una dieta baja en grasas saturadas, hacer ejercicio y controlar el estrés." },
      { title: "Apnea del sueño", content: "Dificultades respiratorias al dormir debido al exceso de peso. Prevención: Bajar de peso, evitar el alcohol y dormir en posiciones adecuadas." },
    ],
  };

  useEffect(() => {
    const status = localStorage.getItem("imcStatus");
    setImcStatus(status);
    if (status && diseases[status]) {
      setEnfermedades(diseases[status]);
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % enfermedades.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + enfermedades.length) % enfermedades.length);
  };

  return (
    <div className="p-4 bg-[#ffffff] flex flex-col h-screen">
      <div className="flex w-full justify-between p-4 mb-6">
        <SidebarSwitch onClick={() => setIsSidebarOpen(true)} />
        <AppName />
      </div>
      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      {enfermedades.length > 0 && (
        <div className="w-full max-w-md mx-auto bg-[#F5F9FF] p-4 border-2 border-[#36AAFF] rounded-lg text-center">
          <h2 className="text-xl font-bold mb-4 text-[#36AAFF]">Posibles Enfermedades</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#36AAFF]">{enfermedades[currentIndex].title}</h3>
            <p className="text-gray-600 mt-2">{enfermedades[currentIndex].content}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="px-4 py-2 bg-[#36AAFF] text-white rounded-lg">← Anterior</button>
            <button onClick={handleNext} className="px-4 py-2 bg-[#36AAFF] text-white rounded-lg">Siguiente →</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Diseases;
