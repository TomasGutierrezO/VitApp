import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import SidebarSwitch from "../components/SidebarSwitch"
import AppName from "../components/AppName"

const NutPlans = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [imcStatus, setImcStatus] = useState("")
  const [meals, setMeals] = useState([])
  const [openMeal, setOpenMeal] = useState(null)

  const dietPlans = {
    "Bajo peso": [
      { title: "Desayuno", content: "Tazón de avena, plátano y nueces.\n1 huevo revuelto.\nTé o café con leche entera." },
      { title: "Media Mañana", content: "Batido de plátano con mantequilla de maní y leche.\nPuñado de almendras." },
      { title: "Almuerzo", content: "150g de pechuga de pollo a la plancha.\n1 taza de arroz integral.\nEnsalada de aguacate, tomate y espinacas.\nJugo natural (sin azúcar)." },
      { title: "Merienda", content: "Yogur griego con miel y frutos secos.\nGalletas integrales con queso." },
      { title: "Cena", content: "Filete de salmón al horno.\nPuré de papas.\nBrócoli al vapor.\nInfusión caliente." },
    ],
    Saludable: [
      { title: "Desayuno", content: "Avena con leche descremada y frutos rojos.\n1 Huevo hervido.\nCafé o té sin azúcar." },
      { title: "Media Mañana", content: "Yogur natural con granola y manzana.\nPuñado de nueces." },
      { title: "Almuerzo", content: "150g de pechuga de pollo a la plancha.\nQuinua con verduras salteadas.\nEnsalada mixta.\nAgua o infusión." },
      { title: "Merienda", content: "Pan integral con aguacate y tomate.\nInfusión de hierbas." },
      { title: "Cena", content: "Salmón a la plancha.\nEnsalada de lentejas con pepino y pimiento.\nBrócoli al vapor.\nTé sin cafeína." },
    ],
    Sobrepeso: [
      { title: "Desayuno", content: "Yogur natural bajo en grasa con fresas y chía.\n1 huevo cocido.\nCafé o té sin azúcar." },
      { title: "Media Mañana", content: "Palitos de zanahoria y pepino con hummus.\nAgua con limón." },
      { title: "Almuerzo", content: "150g de filete de pavo a la plancha.\nEnsalada de espinacas, tomate y aguacate.\n1/2 taza de arroz integral.\nAgua natural." },
      { title: "Merienda", content: "Batido de espinacas, piña y pepino.\nPuñado de almendras." },
      { title: "Cena", content: "Filete de pescado al horno.\nPuré de coliflor.\nEnsalada verde.\nTé sin cafeína." },
    ],
    Obesidad: [
      { title: "Desayuno", content: "Batido de espinacas, manzana verde y pepino.\n1 huevo duro.\nTé verde sin azúcar." },
      { title: "Media Mañana", content: "Puñado de almendras.\n1 pera." },
      { title: "Almuerzo", content: "150g de pechuga de pollo al horno.\nEnsalada variada con aguacate y tomate.\nBrócoli al vapor.\nAgua con limón." },
      { title: "Merienda", content: "Yogur griego sin azúcar.\nFruta pequeña (manzana o naranja)." },
      { title: "Cena", content: "Sopa de verduras sin crema.\nEnsalada de espinacas con atún.\nInfusión caliente." },
    ],
  }

  useEffect(() => {
    const status = localStorage.getItem("imcStatus")
    setImcStatus(status)
    if (status && dietPlans[status]) {
      setMeals(dietPlans[status])
    }
  }, [])

  const toggleMeal = (index) => {
    setOpenMeal(openMeal === index ? null : index)
  }

  return (
    <div className="p-4 bg-[#ffffff] flex flex-col h-screen">
      <div className="flex w-full justify-between p-4 mb-6">
        <SidebarSwitch onClick={() => setIsSidebarOpen(true)} />
        <AppName />
      </div>

      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      {meals.length > 0 && (
        <div className="w-full max-w-md mx-auto bg-[#F5F9FF] p-4 border-2 border-[#36AAFF] rounded-lg">
          <h2 className="text-center text-xl font-bold mb-4 text-[#36AAFF] mb-10">Tu plan nutricional</h2>

          {meals.map((meal, index) => (
            <div key={index} className="mb-4 border rounded-lg overflow-hidden border-[#36AAFF] bg-white shadow-sm">
              <button
                onClick={() => toggleMeal(index)}
                className="w-full flex items-center justify-between p-4 bg-[#36AAFF] text-white hover:bg-[#4db3ff] transition-colors duration-200"
              >
                <span className="text-lg font-bold">{meal.title}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openMeal === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div 
                className={`transition-all duration-200 ease-in-out ${
                  openMeal === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 bg-[#f8faff]">
                  {meal.content.split("\n").map((item, i) => (
                    <p key={i} className="mb-2 last:mb-0 text-gray-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NutPlans;