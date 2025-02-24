import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import SidebarSwitch from "../components/SidebarSwitch"
import AppName from "../components/AppName"

const NutPlans = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [imcStatus, setImcStatus] = useState("")
  const [meals, setMeals] = useState([])

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

  return (
    <div className="p-4 bg-[#ffffff] flex flex-col h-screen">
      <div className="flex w-full justify-between p-4 mb-6">
        <SidebarSwitch onClick={() => setIsSidebarOpen(true)} />
        <AppName />
      </div>

      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      {meals.length > 0 && (
        <div className="w-full max-w-md mx-auto bg-[#F5F9FF] p-4 border-2 border-[#36AAFF] rounded-lg">
          <h2 className="text-center text-xl font-bold mb-4 text-[#36AAFF]">Tu plan nutricional</h2>

          {meals.map((meal, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-4 h-4 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#36AAFF]">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-[#36AAFF]">{meal.title}</span>
              </div>
              <div className="pl-7 text-gray-600">
                {meal.content.split("\n").map((item, i) => (
                  <p key={i} className="mb-1 last:mb-0">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NutPlans;