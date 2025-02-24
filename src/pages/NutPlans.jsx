import { useState } from "react"
import Sidebar from "../components/Sidebar"
import SidebarSwitch from "../components/SidebarSwitch"
import AppName from "../components/AppName"

const NutPlans = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const meals = [
    {
      title: "Desayuno",
      content: "1 taza de avena con leche descremada\n1 plátano\n2 claras de huevo\n1 cucharada de miel",
    },
    {
      title: "Media Mañana",
      content: "1 manzana\n10 almendras sin sal",
    },
    {
      title: "Almuerzo",
      content:
        "150g de pechuga de pollo\n1 taza de arroz integral\n2 tazas de vegetales mixtos",
    },
    {
      title: "Merienda",
      content: "1 yogur natural\n1 puñado de arándanos",
    },
    {
      title: "Cena",
      content: "150g de pescado al horno\n1 papa mediana cocida\nEnsalada verde",
    },
  ]

  return (
    <div className="p-4 bg-[#ffffff] flex flex-col h-screen">
      <div className="flex w-full justify-between p-4 mb-6">
        <SidebarSwitch onClick={() => setIsSidebarOpen(true)} />
        <AppName />
      </div>

      {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

      <div className="w-full max-w-md mx-auto bg-[#F5F9FF] p-4 border-2 border-[#36AAFF] rounded-lg">
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
    </div>
  )
}

export default NutPlans;