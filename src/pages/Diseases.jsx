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
      {
        title: "Anemia",
        content: "Déficit de hierro en la sangre, causando fatiga y debilidad.",
        prevention:
          "Consumir alimentos ricos en hierro como carnes magras, espinacas, legumbres y cereales fortificados.",
      },
      {
        title: "Osteoporosis",
        content: "Huesos frágiles debido a la falta de calcio y vitamina D.",
        prevention:
          "Consumir productos lácteos, almendras, vegetales de hoja verde y tomar suficiente sol para la producción de vitamina D.",
      },
      {
        title: "Deficiencias Nutricionales",
        content: "Falta de vitaminas esenciales para el cuerpo.",
        prevention: "Mantener una dieta equilibrada con frutas, verduras, proteínas y carbohidratos saludables.",
      },
      {
        title: "Problemas Cardiacos",
        content:
          "Los problemas cardiacos como el prolapso de la valvula mitrial, las arritmias y la insuficiencia cardíaca pueden surgir a partir de un IMC bajo. Además, un desequilibrio de los minerales necesarios para la función muscular puede alterar el ritmo normal del corazón",
        prevention:
          "No fumar. Realizar más actividades fisicas. Llevar una dieta saludable para el corazón con un consumo alto de verduras y frutas.",
      },
    ],
    Saludable: [
      {
        title: "Menor riesgo de enfermedades",
        content: "Mantiene un equilibrio adecuado de nutrientes y bienestar general.",
        prevention:
          "Seguir un estilo de vida activo, mantener una dieta balanceada y realizar chequeos médicos regulares.",
      },
    ],
    Sobrepeso: [
      {
        title: "Hipertensión",
        content: "Aumento de la presión arterial con riesgo de enfermedades cardíacas.",
        prevention: "Reducir el consumo de sodio, realizar actividad física regularmente y mantener un peso saludable.",
      },
      {
        title: "Resistencia a la insulina",
        content: "Mayor probabilidad de desarrollar diabetes tipo 2.",
        prevention:
          "Consumir alimentos con bajo índice glucémico, evitar azúcares refinados y mantener un estilo de vida activo.",
      },
      {
        title: "Dolores articulares",
        content: "Sobrecarga en las articulaciones causando molestias y desgaste.",
        prevention:
          "Mantener un peso adecuado, realizar ejercicios de bajo impacto y fortalecer los músculos de soporte.",
      },
      {
        title: "Apnea del sueño",
        content:
          "Problemas en la respiración, la respiración es superficial y se detiene durante el sueño por la cantidad excesiva de grasa que se almacena al rededor del cuello y bloquea las vías respiratorias.",
        prevention:
          "Perder grasa corporal. Dormir de lado. Realizar más actividades fisicas. Mantener una alimentación equilibrada. Evitar fumar.",
      },
    ],
    Obesidad: [
      {
        title: "Diabetes tipo 2",
        content: "Alteración en la regulación del azúcar en sangre.",
        prevention:
          "Controlar el consumo de carbohidratos simples, hacer ejercicio regularmente y mantener un peso saludable.",
      },
      {
        title: "Enfermedades cardíacas",
        content: "Aumento del riesgo de infartos y otros problemas cardiovasculares.",
        prevention: "Llevar una dieta baja en grasas saturadas, hacer ejercicio y controlar el estrés.",
      },
      {
        title: "Apnea del sueño",
        content: "Dificultades respiratorias al dormir debido al exceso de peso.",
        prevention: "Bajar de peso, evitar el alcohol y dormir en posiciones adecuadas.",
      },
      {
        title: "Cancer de colon",
        content:
          "Vesícula biliar y cáncer de endometrio son algunos de los diferentes tipos de cáncer que a menudo se asocian con peso corporal excesivo y alto IMC.",
        prevention: "Bajar de peso, evitar el alcohol y dormir en posiciones adecuadas.",
      },
    ],
  }

  useEffect(() => {
    const status = localStorage.getItem("imcStatus");
    setImcStatus(status);
    if (status && diseases[status]) {
      setEnfermedades(diseases[status]);
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % enfermedades.length)
  }

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
      <h2 className="text-3xl font-bold mb-8 text-[#36AAFF] text-center">Posibles Enfermedades - {imcStatus}</h2>
      {enfermedades.length > 0 && (
        <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#36AAFF] mb-4 border-b-2 border-blue-200 pb-2">{enfermedades[currentIndex].title}</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{enfermedades[currentIndex].content}</p>
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2 text-lg">Prevención:</h4>
              <p className="text-green-700 leading-relaxed">{enfermedades[currentIndex].prevention}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handlePrev} className="px-4 py-2 bg-[#36AAFF] text-white rounded-lg">← Anterior</button>
            <button onClick={handleNext} className="px-4 py-2 bg-[#36AAFF] text-white rounded-lg">Siguiente →</button>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center space-x-2">
        {enfermedades.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-[#36AAFF]" : "bg-blue-100"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Diseases;
