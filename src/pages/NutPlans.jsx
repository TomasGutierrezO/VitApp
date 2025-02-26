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
      { title: "Almuerzo", content: "Pechuga de pollo a la plancha.\n1 taza de arroz integral.\nEnsalada de aguacate, tomate y espinacas.\nJugo natural (sin azúcar)." },
      { title: "Merienda", content: "Yogur griego con miel y frutos secos.\nGalletas integrales con queso." },
      { title: "Cena", content: "Filete de salmón al horno.\nPuré de papas.\nBrócoli al vapor.\nInfusión caliente." },
    ],
    Saludable: [
      { title: "Desayuno", content: "Avena con leche descremada y frutos rojos.\n1 Huevo hervido.\nCafé o té sin azúcar." },
      { title: "Media Mañana", content: "Yogur natural con granola y manzana.\nPuñado de nueces." },
      { title: "Almuerzo", content: "Pechuga de pollo a la plancha.\nQuinua con verduras salteadas.\nEnsalada mixta.\nAgua o infusión." },
      { title: "Merienda", content: "Pan integral con aguacate y tomate.\nInfusión de hierbas." },
      { title: "Cena", content: "Salmón a la plancha.\nEnsalada de lentejas con pepino y pimiento.\nBrócoli al vapor.\nTé sin cafeína." },
    ],
    Sobrepeso: [
      { title: "Desayuno", content: "Yogur natural bajo en grasa con fresas y chía.\n1 huevo cocido.\nCafé o té sin azúcar." },
      { title: "Media Mañana", content: "Palitos de zanahoria y pepino con hummus.\nAgua con limón." },
      { title: "Almuerzo", content: "Pavo a la plancha.\nEnsalada de espinacas, tomate y aguacate.\n1/2 taza de arroz integral.\nAgua natural." },
      { title: "Merienda", content: "Batido de espinacas, piña y pepino.\nPuñado de almendras." },
      { title: "Cena", content: "Filete de pescado al horno.\nPuré de coliflor.\nEnsalada verde.\nTé sin cafeína." },
    ],
    Obesidad: [
      { title: "Desayuno", content: "Batido de espinacas, manzana verde y pepino.\n1 huevo duro.\nTé verde sin azúcar." },
      { title: "Media Mañana", content: "Puñado de almendras.\n1 pera." },
      { title: "Almuerzo", content: "Pechuga de pollo al horno.\nEnsalada variada con aguacate y tomate.\nBrócoli al vapor.\nAgua con limón." },
      { title: "Merienda", content: "Yogur griego sin azúcar.\nFruta pequeña (manzana o naranja)." },
      { title: "Cena", content: "Sopa de verduras sin crema.\nEnsalada de espinacas con atún.\nInfusión caliente." },
    ],
  }

  const getMealIcon = (title) => {
    switch (title.toLowerCase()) {
      case "desayuno":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
          </svg>
        )
      case "media mañana":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3,3A1,1 0 0,0 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5A1.5,1.5 0 0,0 6,21A1.5,1.5 0 0,0 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4A1,1 0 0,0 9,3A1,1 0 0,0 8,4V8A0.5,0.5 0 0,1 7.5,8.5A0.5,0.5 0 0,1 7,8V4A1,1 0 0,0 6,3A1,1 0 0,0 5,4V8A0.5,0.5 0 0,1 4.5,8.5A0.5,0.5 0 0,1 4,8V4A1,1 0 0,0 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,3 19.88,3Z" />
          </svg>
        )
      case "almuerzo":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z" />
          </svg>
        )
      case "merienda":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,6C8.69,6 6,8.69 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,8.69 15.31,6 12,6M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10H17V12H7V10Z" />
          </svg>
        )
      case "cena":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5,21L14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.5,21H15.5M5,11H10A3,3 0 0,1 13,14H2A3,3 0 0,1 5,11M13,18H2A3,3 0 0,1 5,15H10A3,3 0 0,1 13,18M2,10V6A2,2 0 0,1 4,4H9A2,2 0 0,1 11,6V10H2Z" />
          </svg>
        )
      default:
        return null
    }
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
    <div className="p-4 bg-[#ffffff] flex flex-col min-h-screen">
      <div className="flex w-full justify-between p-4 mb-3">
        <SidebarSwitch onClick={() => setIsSidebarOpen(true)} />
        <AppName />
      </div>

      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      {meals.length > 0 && (
        <div className="w-full max-w-md mx-auto bg-[#F5F9FF] p-4 border-2 border-[#36AAFF] rounded-lg">
          <div className="text-center mb-5">
            <h2 className="text-xl font-bold text-[#36AAFF] mb-2">Tu plan nutricional</h2>
            <p className="text-gray-600">Plan personalizado para tu estado: <span className="font-semibold text-[#36AAFF]">{imcStatus}</span></p>
          </div>

          <div className="space-y-4">
            {meals.map((meal, index) => (
              <div 
                key={index} 
                className="mb-3 border rounded-lg overflow-hidden border-[#36AAFF] bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleMeal(index)}
                  className="w-full flex items-center p-4 bg-[#E3F2FD] text-[#36AAFF] hover:bg-[#d1e8fc] transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-200 ${
                        openMeal === index ? "rotate-90" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <div className="text-[#36AAFF] w-6 h-6 mx-2">
                      {getMealIcon(meal.title)}
                    </div>
                    <span className="text-lg font-bold">{meal.title}</span>
                  </div>
                </button>
                <div 
                  className={`transition-all duration-200 ease-in-out ${
                    openMeal === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-4 bg-[#f8faff]">
                    <ul className="list-disc list-inside">
                      {meal.content.split("\n").map((item, i) => (
                        <li key={i} className="mb-2 last:mb-0 text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NutPlans;